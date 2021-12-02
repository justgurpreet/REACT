// import {storeProducts} from '../data';
import React, {Component} from 'react';
import axios from 'axios';
import { unstable_trace as trace } from "scheduler/tracing";

// Provider and Consumer
// any changes done to Context it notifies all Consumer
const  ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products : [],
        cart:[],
        detail : {}
    }
    // component constructor ==> render() ==> componentDidMount()
    componentDidMount() {
        let prds = [];
        // storeProducts.forEach( p => {
        //     prds.push({...p});
        // });
        // this.setState({
        //     products : prds
        // }, () => console.log("products initialized!!!"));

        axios.get('http://localhost:1234/products').then( response => {
            prds = response.data;
            this.setState({
                products: prds
            }, () => console.log("products initialized!!!"));
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state, addToCart: this.addToCart, handleDetail: this.handleDetail}}>
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

    handleDetail = (id) => {
        axios.get('http://localhost:1234/products/' + id).then( response => {
            this.setState({
                detail: response.data
            }, () => console.log("product fetched!!!"));
        });
    }

    checkout = () => {
        axios.post('http://localhost:1234/orders/', this.state.cart).then(resp => {});
        this.setState({
            cart: []
        });
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

