import { combine } from './reducers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './containers/app';

const store = createStore (
    combine // здесь мы создаем store
) 

store.dispatch({ // передаем наш action
                 // здесь мы будем передавать список нашего каталога
    type: "SET_CATALOG", 
    items: [
        {
            id: 5,
            name: "Computer",
            description: "sovremenni computer puper-super",
            price: 35320,
            photos: ["[]string[];"] // массив строк означает квадратные скобки
        }
    ]

}) 

store.dispatch({ // передаем наш action
    // здесь мы будем передавать список нашего каталога
type: "LOW_CATALOG", 
}) 

ReactDOM.render(  // передавая store мы передали redux react'у
    <Provider store={store}>   
        <App />
    </Provider>,
    document.getElementById('app'),
);

