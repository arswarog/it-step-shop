import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ICombineState } from '../reducers';
import { buyItem } from '../actions';
import { BasketContentComponent } from '../pages/basketContent.component';


function mapStateToProps(state: ICombineState) {
    //console.log(state);
    return {
        counter : state.catalog.counter,
        items   : state.basket.items
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         increase,
//         decrease
//     }, dispatch);
// }

export var BasketContent = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    //mapDispatchToProps,
)(BasketContentComponent as any);
