import {useEffect, useState} from "react";
import {useApolloClient} from "@apollo/client";
import CustomStore from "devextreme/data/custom_store";

const useCrudByGql = (load, insert, update, remove, byKey) => {
    const [store, setStore] = useState(null);
    const client = useApolloClient();
    useEffect(() => {
        setStore(({
            key: 'id',
            byKey: (key) => {
                const variables = {variables: {id: key}};
                return new Promise((resolve, reject) => {
                    client.query({ query: byKey, variables}).then(({data}) => {resolve(data[Object.keys(data)[0]]);}).catch(reject);
                });
            },
            load: async ({customQueryParams}) => {
                await client.cache.reset();
                const {data} = await client.query({ query: load, variables: customQueryParams});
                return data[Object.keys(data)[0]];
            },
            insert: async (values) => {
                const {data} = await client.mutate({mutation: insert, variables: values});
                return data[Object.keys(data)[0]];
            },
            update: async (key, values) => {
                const {data} = await client.mutate({mutation: update,variables: {...values, id: key}});
                return data[Object.keys(data)[0]];
            },
            remove: async (key) => {
                const {data} = await client.mutate({mutation: remove,variables: {id: key}});
                return data[Object.keys(data)[0]];
            }
        }));
    }, []);

    return store;
};

export default useCrudByGql;
