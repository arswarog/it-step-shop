import { connect } from 'react-redux';
import { ContentComponent } from '../components/content.component';

function mapStateToProps(state) {
    return {
        counter : state.catalog.counter,
        products: state.catalog.products,
    };
}

export var Content = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    // mapDispatchToProps
)(ContentComponent);
