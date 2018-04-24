import { connect } from 'react-redux';
import { ContentComponent } from '../components/content.component';
import { ICombineState } from '../reducers';

function mapStateToProps(state: ICombineState) {
    console.log(state);
    return {
        counter : state.catalog.counter,
        products: state.catalog.products,
    };
}

export var Content = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    // mapDispatchToProps
)(ContentComponent);
