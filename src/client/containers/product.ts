import { connect } from 'react-redux';
import { ProductComponent } from '../components/product.component';
import { ICombineState } from '../reducers';
import { bindActionCreators } from 'redux';
import { buyItem, addCounter } from '../actions';

function mapStateToProps(state: ICombineState) {
    return {
        product: state.catalog.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({f: buyItem, z: addCounter },dispatch)
}


export var Product = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    mapDispatchToProps
)(ProductComponent);