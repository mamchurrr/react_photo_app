import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './system/rootReducer'

import App from './App';

const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

