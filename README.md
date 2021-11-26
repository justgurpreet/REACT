# REACT

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub: https://github.com/BanuPrakash/REACT

-------------------------------------------------------------
Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ]

===============================================================

JavaScript

----------

Scripting language, loosely typed language

var name = "Smith"; // string

name.toUpperCase();

var age = 20;
age++;

age = "Twenty one"; 

--------

JS ==> Js engine [ V8, JavaScriptCore, SpiderMonkey, Chakra, NashHorn]

myFile.js

var g = 100;

function doTask() {
	var a = 10;
	if( g > a) {
		var b = 20;
		c  = 30;
	}	

	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);


===

Yound Generation ==> any new objects are placed here [ Semi space 1 or Semi Space 2]

Minor GC [ Scavenger] ==> remove unused objects

Any object which survives 2 cycles of MinorGC will be moved to Old Generation


Major GC ==> Full GC ==> remove any unused objects from Old Generation [ Mark Sweep Compact]


=============
Java , C#, JavaScript ==> can't use Pointers


==============

console.log("Hello!!!");

function doTask() {
	setInterval( function timed() {
		console.log("Hi!!")
	}, 100);
}

doTask();

$("#btn").click(function clicked() {
	console.log("Clicked!!1")
});

console.log("Bye!!");


====

PsuedoCode of Event loop

pendingTimers = [];
pendingCallbacks = [];
pendingOsTasks = [];

while(pendingTimers.length !== 0 || pendingCallbacks.length !== 0 .. ) {
	1) handle pending timers
	2) handle pending callbacks
	3) pause
	4) handle pending OS task [ close events]
}

=============================

Functional style of programming

High Order Functions
1) Function accepts function as argument
2) function return a function ==> Closure

	function greeting(msg) {
		return function(name) {
			return msg + " " + name;
		}
	}

	let morningGreet = greeting("Good morning");
	let greet = greeting("Hey ");

	morningGreet("Raj");
	morningGreet("Smitha");
===

Cache
	getEmployee(2); ==> client API call ==> RESTAPI ==> DB // cache miss

	getEmployee(2); ==> get from cache // cache hit

	getEmployee(3);

======================

ES 6 features

ECMA2015 ==> ES 6
ESNext

Write code in ES6 / TypeScript / LiveScript/ DART/ CoffeeScript / JSX

Transcompile / Transpile Convert to ES5 or lower compatable version

* Babel [ ES 6 or JSX ]
* TSC ==> TypeScript Compiler

1) Arrow function

let add = (x,y) => x + y;

function add(x,y) {
	return x + y;
}

 function filter(elems, predicate) {
          let result = [];
          forEach(elems, function(e) {
              if(predicate(e)) {
                  result.push(e);
              }
          });
          return result;
}

  var predicateFn = function(e) {
          return e.category === 'mobile';
      }

      var output = filter(products, predicateFn);

 With Arrow:

 function filter(elems, predicate) {
          let result = [];
          forEach(elems,  e => {
              if(predicate(e)) {
                  result.push(e);
              }
          });
          return result;
}

 var output = filter(products, e => e.category === 'mobile');


2) Block level scope [ let and const]

const PI = 3.1415;

var g = 100;

function doTask() {
	var a = 10;
	if( g > a) {
		let b = 20; // not hoisted
		c  = 30;
	}	
	console.log(g, a, b, c); // b is not visible
}

doTask();

===


JavaScript module System ==>

var shopModule = (function() {
	var data = 100;

	function doTask() {
		console.log(data);
	}
	return {
		doTask: doTask
	}
})();


var customerModule = (function() {
	var data = 99;

	function doTask() {
		..
	}

	return {
		doTask: doTask;
	}
})();

shopModule.doTask();



============

3) Destructuring and spread operator [...]
3.1) Arrays
	var data = [6,2,11,7,77];

	old way:

	var x = data[0];
	var y = data[1];

	ES 6:

	var [x,y,...others] = data;

	now x ==> 6, y ==> 2 and others will [ 11,7, 77]

3.2) Object
 
 var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};
 ES 5:
 console.log(p.name, p.category);

 

ES 6:
var {name, price} = p;
console.log(name, price);

4) Clone


 var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

 var ref = p; // pointer

 ref.price = 8888; // change "p.price" also

var cpy = {...p}; // clone

cpy.price = 222; // won;t change p.price ==> it's a copy

lodash, underscore , ...

var data = [7,1 ,55,1];

car cpy = [...data]; // clone

===

5) Promise API for Asynchronous functions
	==> return future result [ resolved or rejected output]

	function doTask() {
		return new Promise( (resolve, reject) => {
			setTimeout( () => resolve("All done!!!"), 2000);
		});
	}

	doTask().then( 
		res => console.log(":-)", res), 
		rej=> console.log(":-(", rej)
	);

	console.log("End!!!");

6) Async and Await
	
	fetch('https://jsonplaceholder.typicode.com/users/1')
	.then(response => response.json(), rej => console.log("Error", rej))
	.then(data => console.log(data))

	async function doTask() {
		try {
			let resp = await fetch('https://jsonplaceholder.typicode.com/users/1'); //barrier
			let data = await resp.json();
			console.log(data);
		} catch(e) {
			console.log(e);
		}
	}


	doTask();
	console.log("Do.......")

===============

Task:

Map function ==> HOF

Input is products array

output is name of products [iPhone, OnePlus, Onida]

=======================

Day 2

Recap:
JavaScript Context ==> Global creation Context, Execution Context, Functional Creation and Exceution Context

JavaScript ==> Memory ==> RSS, Heap, Stack, Code Segment , Large Objects [ Garbage Collection]

Event Loop and Callback [ Web Api ]

Functional Style  of Programming [ HOF ]
Function accepting function as argument ==> filter, forEach
Task ==> map HOF

Function returning a Function ==> Closure
=> Cache

ES 6 Features:
1) Arrow
2) Destructrucing
3) Spread operators
4) Clone
5) Promise
6) Async and Await
7) ES 6 module System / class

https://rxmarbles.com/

=================================================

NodeJS

platform with V8 javascript engine and libuv libraries

* Use to build APIs [ RESTful, GraphQL ]
* Realtime application [ Chatbot]
* Streaming [ OTT ]
* platform for transpile/ Transcompiler your code; bundling, testing, Code analyis for building client side web application [ Angular, React, Vue, Backbone, .. ]
	Angular ==> TypeScript / DART
	React ==> JSX / TSX
 
 	a.js, b.js, c.js

 	index.html
 		<script src="c.js"></script>
 		<script src="b.js"></script>
 		<script src="a.js"></script>

 bundle.js
 	<script src="bundle.js"></script>

=============

NodeJS JavaScript Build tools
1) Grunt
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.
2) Gulp
3) Webpack

===

NPM / YARN

node package manager
* Manage dependecies [ download modules from repositories] ==> Maven / Gradle, PIP
* Run Scripts
* Publish

==
Steps:
1) npm init -y

creates package.json [ similar to pom.xml ]
	==> place where we configure 
	1) "dependecies" ==> modules required for production stage
	2) "devDependencies" ==> modules required for development stage [ testing / linting / compile]


	when we bundle only "dependecies" are included in final bundle to be taken to server for execution


npm i webpack webpack-dev-server webpack-cli -D

"devDependencies": {
    "webpack": "^5.64.3",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.5.0"
  }

Other team members:

npm install  

checks package.json and downloads all the dependecnies


npm i html-webpack-plugin -D

HTML Webpack Plugin
Plugin that simplifies creation of HTML files to serve your bundles


index.html

<html>
<body>
	contents!!!
</body>
</html>

"html-webpack-plugin": "^5.5.0"

^any version greater than

~5.5.0 

any version where major is "5";
minor and patch can be any latest

"html-webpack-plugin": "5.5.0"
exact version

====================

Module System:

1) Plain Vanilla MS
IIFE
()();

2) CommonJS module system [ NodeJS default]

lib.js

module.exports add = function () {
}

module.exports sub = function() {

}

other.js

let add = require('lib').add;

============

npm i css-loader style-loader -D


@import 'styles.css'

<style>

</style>



==

src/styles.css
body {
    background-color: cadetblue;
    color: white;
}


===

index.js

import "./styles.css";

console.log("Hello World Webpack!!!");

====================

BABEL

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

TRACUER

===

TypeScript ==> TSC


npm i @babel/core babel-loader @babel/preset-env -D

===

Create chunks:

node_modules ==> seperate chunk
mycode ==> seperate chunk

===========

Webpack ==> JavaScript Build tool
==> CSS-loader [ import './styles.css' ], Style-loader [ <style></style>]
==> Babel-loader, @babel/babel-preset, @babel/core [ ES6+ to downward compatilbility]
==> HtmlWebpackPlugin [ bundles placed into html]
==> Webpack-dev-server ==> light http server with push enabled
==> webpack --mode devlopment / production

In production mode [ minify and uglify]

==============================================

REACT

Data (State of resource) ==> Presentation

Server side rendering:
to clients only presentation pages are served [ pdf / html / image]
Templates
Java: JSP/ Thymeleaf
PHP
JS: Jade / Pug/ HandleBars / Mustache / jQuery

Client side Rendering:
Allows client server seperation
Server sends the state of resource to clients;
each client can render the data
Mobile clients [ Android/ Swift]
Web clients
Standalone clients

Web application:
JS has templates for rendering on client side
* HandleBars / Mustache / jQuery

Single Page Applications [ index.html ]
only JSON / XML is what is sent as payload between client and server

* Routing
	http://adobe.com/products
	http://adobe.com/clients
	http://adobe.com/locations

	http://amazon.com/products/mobile/iphone
	http://amazon.com/products/mobile/OnePlus

	http://amazon.com/products/tv/sony

==> SEO
==> Bookmark
==> Navigation between views and not pages
==> Security
http://amazon.com/cart

* binding [ one way or two way]
data ==> placeholders 

* Controlling partial rendering
* Dependency Injection and lazy loading of modules

Model View Controller
Model ==> data
Controller 

View <==> Controller <==> Model

1) Backbone ==> MVC framework
2) Angular ==> MVC framework
3) React ==> View Library

============================
React Playboard:

codepen.io

JS libraries:
https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js

https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

JS Preprocessor:
Babel

===
DOM elements: html, body, h1, table, ..
<tr></tr>

<div id="app"></div>

let Welcome = React.createElement("h1", {style: {'color': 'blue'}}, "Welcome to React");


Reconcillation ==> React Element is rendered to VDOM and DOM [ JSON object]
ReactDOM.render(Welcome, document.getElementById("app"));

==============

functional and class components

 
function Welcome() {
  return <div>
        Hello!!!
    </div>
}

console.log(Welcome())
ReactDOM.render(<Welcome />, document.getElementById("app"));

======

Props
==> data passed to an Component
like attributes to Elements
<img src="logo.png" width="100" height="100" />

===

// React Component returns JSX
function Welcome(props) {
  return <div>
        <h1> {props.title} </h1>
        <h2> {props.place} </h2>
    </div>
}

// console.log(Welcome())
ReactDOM.render(<Welcome title="Welcome to React"  place="Virtual"/>, document.getElementById("app"));

==
JSX:
function Welcome({title, place}) {
  return <div>
        <h1> {title} </h1>
        <h2> {place} </h2>
    </div>
}

need to have one root element

==========

function add(x, y) {
	return x + y
}

add(4,5)

function add(x, y) {
	return
		x + y;
}

add(4,5);
AST

function Welcome({title, place}) {
  return (
		  <div>
		        <h1> {title} </h1>
		        <h2> {place} </h2>
		  </div>
  )
}

=========

 var data = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({title, products}) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
      {
        products.map(p => <Product product ={p}/>)
      }
    </ul>
    </div>
  )
}

function Product({product}) {
	return <li> {product.name} {product.price} </li>
}
ReactDOM.render(<ProductList title="Product List"  products={data} /> , document.getElementById("app"));

============

Class Component

Earlier:

npm i -g create-react-app
create-react-app customerapp

Latest:
npx create-react-app customerapp

==================


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    // init
  }
  // JSX
  render() {
    let {title, place } = this.props;
    return <div>
      {title} {place}
      </div>
  }
} 

ReactDOM.render(<Welcome title="Welcome to React" place="Virtual"/> , document.getElementById("app"));

===

State and behaviour of a model ==> Class Component

Model ==> product, customer, cart, ...

Behaviour ==> delete product, add product, login ,...



