import {storeProducts} from '../data';
import React, {Component} from 'react';

// Provider and Consumer
// any changes done to Context it notifies all Consumer
const  ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products : [],
        cart:[]
    }
    // component constructor ==> render() ==> componentDidMount()
    componentDidMount() {
        let prds = [];
        storeProducts.forEach( p => {
            prds.push({...p});
        });
        this.setState({
            products : prds
        }, () => console.log("products initialized!!!"));
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state, addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

    addToCart = (id) => {
        let prd = this.state.products.filter(p => p.id === id)[0];
        prd.inCart = true;
        prd.count = 1;
        prd.total = prd.price;

        let cartCopy = this.state.cart;
        cartCopy.push(prd);
        this.setState({
            cart: cartCopy
        });
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

