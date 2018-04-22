import {combineReducers} from 'redux'; // в этом файле мы будем объеденять redusers (из модуля конкретный объект импортируется при помощи {})
import {catalog} from './catalog'; // здесь импортируется отдельная переменная
//reductor - уменьшать
export var combine = combineReducers({ // здесь мы комбайн описали
    catalog
})
