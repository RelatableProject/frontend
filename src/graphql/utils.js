import {gql} from "@apollo/client";
import {ApolloClient} from "@apollo/client/core";

type Type = 'String' | 'Int' | 'String!' | 'Int!';

type Output = {
    name: string,
    include: [Output],
    store: any,
    references: string,
    display: string,
}

type Query = {
  inputs: string | {
      [key: string]: Type;
  },
  outputs: [string | Output]
}

const getGql = ({inputs, name, outputs}: Query, mode) => {
    if (typeof inputs === 'string') {
        inputs = inputs.replaceAll(" ", "").split(",").reduce((a, b) => {
            const [key, value] = b.split(":");
            a[key] = value;
            return a;
        }, {})
    }

    let literals = `
    ${mode} ${inputs ? `(${Object.keys(inputs).map(key => `$${key}: ${inputs[key]}`).join(', ')})` : ""} {
        ${name}  ${inputs ? `(${Object.keys(inputs).map(key => `${key}: $${key}`).join(', ')})` : ""} {
              ${outputs.map(output => {
                    if (typeof output === 'string') return output;
                    return `${output.name} {
                      ${output.include.join('\n')}
                    }`;
                }).join('\n')}
            }
    }
  `;
    return gql(literals);
};

export type Model = {
    name: string,
    load: Query,
    insert: Query,
    update: Query,
    remove: Query,
    byKey: Query
}

const getModel = (model: Model) => {
    const {name, load, insert, update, remove, byKey} = model;
    remove.inputs ??= "id: Int!";
    byKey.inputs ??= "id: Int!";
    byKey.outputs ??= load.outputs;
    insert.outputs ??= ["id"];
    update.outputs ??= ["id"];
    remove.outputs ??= ["id"];
    return {
        name: name,
        load: getGql(load, 'query'),
        insert: getGql(insert, 'mutation'),
        update: getGql(update, 'mutation'),
        remove: getGql(remove, 'mutation'),
        byKey: getGql(byKey, 'query'),
        item: model
    }
}


const getStore = (client: ApolloClient, { load, insert, update, remove, byKey }) => {
    return {
        key: 'id',
        byKey: (key) => {
            const queryParams = {query: byKey, variables: {id: key}};
            console.log(queryParams)
            return new Promise((resolve, reject) => {
                client.query(queryParams).then(({data}) => {
                    resolve(data[Object.keys(data)[0]]);
                }).catch(reject);});
        },
        load: async ({customQueryParams}) => {
            const {data} = await client.query({ query: load, variables: customQueryParams});
            return data[Object.keys(data)[0]];
        },
        insert: async (values) => {
            console.log(values)
            Object.keys(insert.input).filter(x => insert.input[x] === 'Boolean!' || insert.input[x] === 'Boolean').forEach(x => {
                if (values[x] === undefined) values[x] = false;
            });
            const {data} = await client.mutate({mutation: insert, variables: values});
            return data[Object.keys(data)[0]];
        },
        update: async (key, values) => {
            await client.cache.reset();
            const {data} = await client.mutate({mutation: update,variables: {...values, id: key}});
            return data[Object.keys(data)[0]];
        },
        remove: async (key) => {
            await client.cache.reset();
            const {data} = await client.mutate({mutation: remove,variables: {id: key}});
            return data[Object.keys(data)[0]];
        }
    }
}

export {
    getStore,
    getGql,
    getModel
}
