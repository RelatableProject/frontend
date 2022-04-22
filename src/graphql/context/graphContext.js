import React, {useState} from 'react';
import {useApolloClient} from "@apollo/client";
import {getStore} from "../utils";
const GraphContext = React.createContext();

const GraphProvider = ({children}) => {
    const stores = {}
    const client = useApolloClient();
    return (
        <GraphContext.Provider value={{
            getStore: (model) => {
                if (stores[model.name]) return stores[model.name];
                const store = getStore(client, model);
                stores[model.name] = store;
                console.log(stores)
                return store;
            }
        }}>
                {children}
        </GraphContext.Provider>
    );
};

export {
    GraphContext,
    GraphProvider
};


