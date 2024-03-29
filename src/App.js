import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React from 'react';
import AppRouter from "./routes/AppRouter";
import {GraphProvider} from "./graphql/context/graphContext";

const App = () => {
    return (
        <GraphProvider>
            <AppRouter/>
        </GraphProvider>
    );
};

export default App;
