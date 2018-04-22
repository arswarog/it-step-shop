import { ContentComponent } from '../components/content.component';
import { connect } from 'react-redux';
import { catalog } from '../reducers/catalog';

function mapStateToProps(state) {
    return {
        products: state.catalog.items
    }
}

export var Content = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
   // mapDispatchToProps
)(ContentComponent)