import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux"

import App from './Route/App.route';
import {store} from "./Redux/store";

import "./index.scss"


ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

