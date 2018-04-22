import { connect } from "react-redux";
import { BasketComponent } from "../components/basket.component";

function mapStateToProps(state) {
    return {
        items: state.basket.items
    };
}

export var Basket = connect(
    mapStateToProps
    //mapDispatchToProps
)(BasketComponent);