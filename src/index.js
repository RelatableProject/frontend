import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";


const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new createHttpLink(
        {
            uri: "http://192.168.20.20:4000"
        }
    ),
    fetchOptions: {
        mode: 'no-cors',
    },
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>
, document.getElementById('root'));
