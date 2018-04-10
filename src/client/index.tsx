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

store.dispatch({
    type    : ActionTypes.BUY_ITEM,
    item:     {
        id: 1,
        name: 'Рабочая станция HP Z640 [Y3Y42EA]',
        description: 'Высокопроизводительная рабочая станция HP Z640, выполненная в шумоизолированном корпусе, для обслуживания которого не требуются инструменты, позволит по-новому взглянуть на бизнес-решения. В HP Z640 объединены лучшие функции решений HP серии Z, благодаря чему вы сможете эффективно решать любые бизнес-задачи. Рабочая станция Z640 на базе Windows 10 отличается невероятными возможностями при малых габаритах. Решение поддерживает до 8 модулей памяти DIMM, до 4 жестких дисков, дополнительный контроллер Thunderbolt и накопители HP Z Turbo, благодаря чему обеспечивается эффективность хранения, высокая производительность и удобство работы. Корпус с шумоизоляцией разработан таким образом, чтобы доступ к компонентам рабочей станции можно было получить без использования инструментов. Он оснащен встроенным разъемом Gigabit Ethernet и удобными ручками (спереди и сзади), а благодаря высоте 4U его легко монтировать в стойку.',
        price: 163999,
        photos: ['https://c.dns-shop.ru/thumb/st1/fit/800/650/0266c3fa007cecb0df13be26b147097a/2f174dccf17e7aa1c149e630dc6656c4398d351b0ab6557659c0a70632656bdc.jpg']
    },
});

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('app'),
);