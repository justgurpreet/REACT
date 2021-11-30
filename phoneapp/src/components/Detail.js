import React, { Component } from 'react'
import {useParams} from 'react-router-dom';
import { ProductConsumer } from './Context';

export default function Detail() {
    let {id} = useParams();
    return (
           <div>
               <ProductConsumer>
                   {
                       value => {
                           value.handleDetail(id);
                           return (
                               <div>
                                   {value.detail.title},
                                   {value.detail.price}
                               </div> 
                           )
                       }
                   }
               </ProductConsumer>
            </div>
        )
    }
