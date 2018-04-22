
import { AppComponent } from "../components/app.component";
import { connect } from "react-redux";

function mapStateToProps(state){
    return{
        counter:state.catalog.counter
    };
}

export var App = connect (
mapStateToProps,// обработчик пропс добавляет новую информацию
//mapDispathToProps
)
(AppComponent)
