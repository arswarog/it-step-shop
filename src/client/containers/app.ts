import { connect } from 'react-redux';
import { AppComponent } from '../components/app.component';
import { bindActionCreators } from 'redux';
import { buyItem } from '../actions';
import { addCounter } from '../actions/catalog';

function mapStateToProps(state) {
    return {
        counter: state.catalog.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({f: buyItem, z: addCounter },dispatch)
}

export var App = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    mapDispatchToProps
)(AppComponent);
