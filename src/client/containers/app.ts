import { AppComponent } from "../app.component";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        counter: state.catalog.counter
    };
}

export var App = connect(
    mapStateToProps
    //mapDispatchToProps
)(AppComponent);