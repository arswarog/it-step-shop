import * as React from 'react';
import { Product } from '../app/classes';

export interface IProductState {
    podrobno: boolean
}

export interface IProductProps {
    product: Product
}

export class ProductComponent extends React.Component<IProductProps, IProductState> {
    constructor(props, state) {
        super(props, state);
        this.raskritie = this.raskritie.bind(this); // Присваивает этой функции эту область видимости
    }
    raskritie() {
        if (this.state && this.state.podrobno) {
            this.setState({ podrobno: false });
        } else {
            this.setState({ podrobno: true });
        }
    }
    render() {
        let product       = this.props.product;
        let descr: string = '';
        let more          = null;
        let less          = null;
        if (this.state && this.state.podrobno) {
            descr = product.description;
            more  = <span className="podrobno" onClick={ this.raskritie }>уменьшить...</span>;
        } else {
            descr = product.description.substring(0, 200);
            more  = <span className="podrobno" onClick={ this.raskritie }>подробнее...</span>;
        }
        return (
            <div className="product col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#">
                        <img className="card-img-top" src={ product.photos[0] } alt=""/>
                    </a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{ product.name }</a>
                        </h4>
                        <h5>Цена: { product.price }&#8381;</h5>
                        <p className="card-text">
                            { descr } &nbsp;{ more }
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>);
    }
}