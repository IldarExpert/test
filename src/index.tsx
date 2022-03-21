import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {checkAuthStatus} from './store/api-action';
import {rootReducer} from './store/root-reducer';

let api: any;
const store = configureStore({
    reducer: rootReducer,
});

store.dispatch(checkAuthStatus());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
