import { connect } from 'react-redux';
import { AppComponent } from '../components/app.component';

function mapStateToProps(state) {
    return {
        counter: state.catalog.counter,
    };
}

export var App = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    //mapDispatchToProps
)(AppComponent);
