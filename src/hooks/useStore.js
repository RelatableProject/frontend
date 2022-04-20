import {gql, useApolloClient, useLazyQuery, useMutation} from "@apollo/client";
import CustomStore from "devextreme/data/custom_store";
import {useEffect, useMemo, useState} from "react";
import DataSource from "devextreme/data/data_source";
import useFirst from "./useFirst";

export type Input = {
    [key: string]: 'Boolean' | 'Boolean!' | 'Int!' | 'Int' | 'String' | 'String!';
}

export interface StoreInfo {
   name: string;
   input: Input;
   output: [string, {
       name: string;
       includes: []
   }];
}

const getParams = x => x ? `(${Object.keys(x).map(key => `$${key}: ${x[key]}`).join(", ")})` : "", getParamsForQuery = x => x ? `(${Object.keys(x).map(key => `${key}: $${key}`).join(", ")})` : ""
const recursivePram = (value) => {
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
        const {name, includes} = value;
        return `${name} {
            ${includes.map(recursivePram).join("\n")}
        }`
    }
    return "";
}
const getGql = (name = "any", input, output = ["id"], type= 'mutation' | 'query') =>  gql(`
        ${type} ${getParams(input)}{
            ${name}${getParamsForQuery(input)} {
                ${output.map(x => recursivePram(x)).join("\n")}
            }
        }
    `);
const getGqlByInfo = (info: StoreInfo, type: 'mutation' | 'query', isWithKey) => {
    info.output ??= ["id"];
    info.output = ["id", ...info.output];
    if (isWithKey) {
        info.input ??= {};
        info.input.id = 'Int!';
    }
    return  getGql(info?.name, info?.input, info?.output, type);
}
const useStore = (load: StoreInfo = {}, insert: StoreInfo = {}, update: StoreInfo = {}, remove: StoreInfo = {}, byKey: StoreInfo = {}) => {
    const [state, setState] = useState(null);
    const client = useApolloClient();
    useEffect(() => {
        byKey.output = load.output;
        const query = ({
            load: getGqlByInfo(load, 'query'),
            insert: getGqlByInfo(insert, 'mutation'),
            update: getGqlByInfo(update, 'mutation', true),
            remove: getGqlByInfo(remove, 'mutation', true),
            byKey: getGqlByInfo(byKey, 'query', true)
        });
        setState(
           ({
               key: 'id',
               byKey: (key) => {
                   const variables = {variables: {id: key}};
                   return new Promise((resolve, reject) => {
                       client.query({ query: query.load, variables}).then(({data}) => {
                           resolve(data[byKey.name]);
                       }).catch(reject);
                   });
               },
               load: async ({customQueryParams}) => {
                   await client.cache.reset();
                   const {data} = await client.query({ query: query.load, variables: customQueryParams});
                   return data[load.name];
               },
               insert: async (values) => {
                   Object.keys(insert.input).filter(x => insert.input[x] === 'Boolean!' || insert.input[x] === 'Boolean').forEach(x => {
                       if (values[x] === undefined) values[x] = false;
                   });
                   const {data} = await client.mutate({mutation: query.insert, variables: values});
                   return data[insert.name];
               },
               update: async (key, values) => {
                   const {data} = await client.mutate({mutation: query.update,variables: {...values, id: key}});
                   return data[update.name];
               },
               remove: async (key) => {
                   const {data} = await client.mutate({mutation: query.remove,variables: {id: key}});
                   return data[remove.name];
               }
           }))
    }, []);
    return state;
};

export default useStore;
