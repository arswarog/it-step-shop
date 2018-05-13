import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ContentComponent } from '../pages/content.component';
import { ICombineState } from '../reducers';
import { buyItem } from '../actions';

function mapStateToProps(state: ICombineState) {
    //console.log(state);
    return {
        counter : state.catalog.counter,
        products: state.catalog.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        buyItem,
    }, dispatch);
}

export var Content = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    mapDispatchToProps,
)(ContentComponent);
