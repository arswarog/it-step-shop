import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import { App } from './app.component';
import { reducer } from './app/store';
import { ActionTypes } from './app/atypes';
import { Provider } from 'react-redux';

let store = Redux.createStore(reducer);

/// Загрузка
store.dispatch({
    type    : ActionTypes.LOAD_ITEMS,
    category: 0,
});

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('app'),
);