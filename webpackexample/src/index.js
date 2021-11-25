import "./style.css";
import {Person} from './Person';

import {add, sub} from './lib';

var _ = require('lodash');

console.log(_.partition([1, 2, 3, 4], n => n % 2));

console.log("Hello World Webpack!!!");

let p = new Person("Smith", 32);

console.log(p.getName(), p.getAge());

console.log(add(4,5));

console.log(sub(14,5));


