import React, { Component } from 'react'
import {useParams} from 'react-router-dom';

export default function Detail() {
    let {id} = useParams();
    return (
           <div>
                <h1>Details!!!  of {id}</h1>
            </div>
        )
    }
