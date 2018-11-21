import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import Main from './main';
import './app.css';
import middleware from './middleware'

const store = createStore(rootReducer,applyMiddleware(middleware));
render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root')
    );
