import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {rootReducer} from './store/root-reducer';

const store = configureStore({
    reducer: rootReducer,
});

localStorage.setItem('Register_data',
    JSON.stringify([
        {
            email: 'test@test.ru',
            password: 'test1',
        },
    ]));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
