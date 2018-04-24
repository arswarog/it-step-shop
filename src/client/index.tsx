import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combine } from './reducers';
import { App } from './containers/app';
import { demoProducts } from './demoData';

const store = createStore(combine);

store.dispatch({
    type   : 'SET_CATALOG',
    counter: 0,
    items  : demoProducts,
});

store.dispatch({
    type: 'INC_CATALOG',
});

store.dispatch({
    type : 'SET_BASKET',
    items: [],
});

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('app'),
);
