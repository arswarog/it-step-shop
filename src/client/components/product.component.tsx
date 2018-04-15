import * as React from 'react';
import { Product } from '../app/classes';

export interface IProductState {
    podrobno:boolean
}

export interface IProductProps {
    product: Product
}

export class ProductComponent extends React.Component<IProductProps, IProductState> {
    constructor(props,state) {
        super(props, state);
        this.raskritie = this.raskritie.bind(this); // Присваивает этой функции эту область видимости
    }
    raskritie() {
        if (this.state && this.state.podrobno) {
            this.setState({podrobno:false})
        } else {
            this.setState({podrobno:true})
        }
    }
    render() {
        let product = this.props.product;
        let descr: string = '';
        let more = null;
        let less = null;
        if (this.state && this.state.podrobno) {
            descr = product.description
            more = <span className="podrobno" onClick={this.raskritie}>уменьшить...</span>
        } else {
            descr = product.description.substring(0,200);
            more = <span className="podrobno" onClick={this.raskritie}>подробнее...</span> 
        }
        return (
            <div className="product">
                <br />
                <big>{ product.name }</big><hr/>

                <div>
                    <img src={product.photos[0]} />
                </div>
                <p className="price">Цена {product.price }р.</p>
                
                <p>{ descr } &nbsp;{more}</p><br/>
                <button type="button">Купить</button>
                

            </div>
        );
    }
}