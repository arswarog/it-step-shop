import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combine } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './containers/app';

const store = createStore(combine);

store.dispatch({
    type: 'SET_CATALOG',
    items: [
        {
            id: 1,
            name: 'string',
            description: 'string',
            price: 1,
            photos: ['https://c.dns-shop.ru/thumb/st1/fit/800/650/0266c3fa007cecb0df13be26b147097a/2f174dccf17e7aa1c149e630dc6656c4398d351b0ab6557659c0a70632656bdc.jpg']
        }
    ]

});
store.dispatch({
    type: 'SET_CATALOG',
    items: [
        {
            id: 1,
            name: 'string',
            description: 'string',
            price: 1,
            photos: ['https://c.dns-shop.ru/thumb/st1/fit/800/650/0266c3fa007cecb0df13be26b147097a/2f174dccf17e7aa1c149e630dc6656c4398d351b0ab6557659c0a70632656bdc.jpg']
        }
    ]

});
store.dispatch({
    type: 'LOW',
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
