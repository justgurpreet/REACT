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


=============================

Day 4

onClick
onChange
onMouseOver
onKeypress


state = {
	"a" : ..,
	"b" : ..
	"customers" : ...

}


 this.setState({
            customers: custs
 }, () => console. log("deleted!!!"));

 =====

 Binding events:

 1) using Arrow operator

  delEvent={(id) => this.deleteCustomer(id)}/>) 

  deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id != id);
         this.setState({
            customers: custs
        }, () => console. log("deleted!!!"));
   }

 2) without arrow using function syntax

 Wrong Syntax: customer is getting delted on render
  delEvent={this.deleteCustomer(c.id)}/>) 

 3) using function reference
    delEvent={this.deleteCustomer}/>)

Cannot read properties of undefined (reading 'customers')
functions will have its own context;
"this" is not referencing to "CutomerList"


4) binding function context to class

  delEvent={this.deleteCustomer.bind(this)}/>) 


var p = {
	"name" : "Test",
	doTask: function () {
		console.log(this.name);
	}
}

p.doTask(); // Test

ver ref = p.doTask; // gets function definition but context is lost

ref(); // within doTask context is not "p"

var nref = p.doTask.bind(p);




5) binding in constructor

 constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }
    render() {
        return (
            <div>
                <Filter />
                {
                   this.state.customers.map(c =>  <CustomerRow 
                        customer={c} 
                        delEvent={this.deleteCustomer}/>) 
                }
            </div>
        )
    }

 6) using arrow function
 delEvent={this.deleteCustomer}/>)  withput bind works

 deleteCustomer = (id) => {
        let custs = this.state.customers.filter(c => c.id != id);
        // Async functions
        this.setState({
            customers: custs
        }, () => console. log("deleted!!!"));
        
    }

 note: Arrow functions will "this" as enclosing context; doesn;t have its own context

=========
key property of list:

<CustomerRow 
                        key={c.id}
                        customer={c} 
                        delEvent={this.deleteCustomer}/>

=============

https://notepad.pw/x39rv72p

============================================

React Testing Library:
 "@testing-library/jest-dom": "^5.11.4",
 "@testing-library/react": "^11.1.0",
 "@testing-library/user-event": "^12.1.10",

 Unit Testing and Integration Testing JS testing libraries:
 1) Jasmine
 2) Mocha
 3) JEST


Angular Test Bed is builton Jasmine
React testing library is built on JEST
ExpressJs and HAPI frameworks ==> most of them prefer Mocha

jest-dom ==> Additional apis to test React Component

===
AAA ==> Assemble Action Assert

getByXXX() ==> throws exception if not found

queryByXXX() ==> returns null

findByXXX() ==> Async components

<button ... />

getByRoleName("button")
getByRoleName("input")

<h1>Welcome to React </h1>

getByText(/react/i);

 <input type="text" 
            placeholder="search by name" 
            onChange={(evt) => props.filterEvent(evt.target.value)}/>

 getByPlaceHolderText("search by name");


 document.querySelector('input[placeholder="search by name"]')

 document.getElementById("#btn")


// test suite
 describe("tesing customer compoenents", () => {
 	// test spec
 	it("filter customer", () => {

 	});

 		// test spec
 	test("delete customer", () => {

 	});

 })

TCER

=============
Code Coverage:

npm test -- --coverage

====



C:\Users\banup\Desktop\Adobe_web\REACT_24_11\REACT\customerapp>npm i cypress -D


cypress.config.json
{
    "testFiles" : "**/*.spec.js",
    "viewportWidth" : 500,
    "viewportHeight" : 500,
    "baseUrl" : "http://localhost:3000",
    "integrationFolder" : "e2e"
}



 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
     "cypress": "cypress run",
    "open" : "cypress open"
  },

npm start

npm run open

===================

npx create-react-app phoneapp

========================================================

State and Props ==> immutable

this.setState({..})

==================

WebVitals:

First Contentful Paint (FCP)


React Context:

Context provides a way to pass data through the component tree without having to pass props down manually at every level


================

var PersonContext = React.createContext();

class PersonProvider extends React.Component {
  state = {
    name : 'Smith',
    email : "",
     update : this.update.bind(this)
  };
  
  update(email) {
    this.setState({
        "email": email
    });
   }
  
  render() {
    return <PersonContext.Provider value={this.state}>
        {this.props.children}
      </PersonContext.Provider>
  }
}

class App extends React.Component{
  render() {
    return <PersonProvider>
        <First />
       </PersonProvider>
  }
}

class First extends React.Component {
  render() {
     return <Second/>
  }
}

class Second extends React.Component {
  render() {
    return <PersonContext.Consumer>
            {
              value => { 
                return <React.Fragment>
                  <h1> {value.name} {value.email}</h1>  
                  <button onClick={() => value.update('smith@adobe.com')}>Change</button>
                  </React.Fragment>
              }
      }
      </PersonContext.Consumer>
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))


=========

function App() {
	return (
		<div>
				<Header />
				{props.children}
		</div>
	)
}




<App>
	<A />
	<B />
</App>





<App>
	<C />
	<D />
	<E />
</App>


let CustomerContext = React.createContext();

class First extends React.Component {
  render() {
     return (
     <CustomerContext.Provider value="Hello World">
    	 <Second/>
   	</CustomerContext.Provider>
     )
  }
}


Second can be a consumer to "PersonContext" and "CustomerContext"


class Second extends React.Component {
  render() {
    return <div>
    	<PersonContext.Consumer>
            {
              value => { 
                return <React.Fragment>
                  <h1> {value.name} {value.email}</h1>  
                  <button onClick={() => value.update('smith@adobe.com')}>Change</button>
                  </React.Fragment>
              }
      }
      </PersonContext.Consumer>

      <CustomerContext.Consumer>
      	value => {
      		console.log(value); // Hello World
      	}
      </CustomerContext.Consumer>
      </div>
  }
}

==========================

JavaScript
RSS ==> Resident Set Size
Stack
Heap ==> Young Generation ==> Old Generation

Redux ==>

===

React Context
React Router Dom
Lazy Initialization
API call with component life cycle

====================

Day 5

$ npx create-react-app phoneapp
phoneapp> npm i bootstrap axios react-router-dom styled-components

7 components
1) ProductList
2) Product
3) Cart
4) CartList
5) Default
6) Detail
7) Navbar

=====

React.Fragment

A common pattern in React is for a component to return multiple elements. 
Fragments let you group a list of children without adding extra nodes to the DOM.

return (
	<div>
		...
		..
	</div>
)

return (
	<React.Fragment>
		...
		..
	</React.Fragment>
)

or

return (
	<>
		...
		..
	</>
)

====

StrictMode is a tool for highlighting potential problems in an application. Like Fragment , StrictMode does not render any visible UI.

<React.StrictMode>
</React.StrictMode>

====

https://notepad.pw/r92cz3fv

Router ==> 
* Different URIs display different views in SPA
* Bookmark an URI
* Navigate between Views
* Easy to protect certain views
* code Splitting

=================
npm i source-map-explorer

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "analyze": "source-map-explorer 'build/static/js/*.js"
  }


npm run build
npm run analyze

====

from share.zip

1) copy data.js into "src"
2) copy "img" folder into "public"
3) copy Button.js into components
4) overwrite "Navbar.js"

==================================================

styled-components

bootstrap is a CSS Framework for Responsive Web Design
Hyprelink:
<a href="somepage" /> for server side rendering

Client side Routing

import {Link} from 'react-router-dom';
<Link to="/" className="nav-link">   
                    Products
</Link>

  <Link to="/cart" className="ml-auto"> 
  	//
	</Link>

if(condition) {
	import('./components/Cart').then( cart => {
		...
	});
}

===
Task:
Complete the applicaiton:
1) Context.js
		increment()
		decrement()

==============

Making API call from react
1) request
2) fetch
3) axios
4) jQuery

==============

json-placeholder

npx json-server --watch data.json --port 1234

================


Day 6

Recap:
	Context ==> helps storing information shared by  nth level components; avoids passing props thro intermediary components
	State and Behaviour are present in Context easy to debug.
	Can easily make all components as functional components 

	react-router-dom BrowserRouter, Route, Link [ instead of <a href >]

	styled-components, bootstrap, font-awesome

	increment() and decrement()

	increment = (id) => {
			let prds = this.state.cart.filter(p => p.id === id) [0];
			prds.count++;
			prds.total = prds.price * prds.count;
			this.setState({
				cart: this.state.cart
			})
	}

=================================================

Errorboundary
	==> componentDidCatch(error, errorInfo) {}
	==> getDerivedStateFromError(error) {}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
     return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
   console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

<ErrorBoundary>
	<A />
	<B />
	<C />
</ErrorBoundary>
<D/>

<ErrorBoundary>
	<E />
	<F />
</ErrorBoundary>

use try-catch within react component for event handling

==================


React Reference

class App extends React.Component {
  emailRef = React.createRef(); // reference
  render() {
    return (
      <div>
      	<input type="text" ref={this.emailRef} />
      	<button onClick={() => this.doTask()}> Click </button>
      </div>
    )
  }
  
  doTask() {
    console.log("-->", this.emailRef.current.value);
    this.emailRef.current.focus();
  }
}


ReactDOM.render(<App/>, document.getElementById("app"));

===

Other options

<input type="text" onChange={(e)=> setName(e.target.value) }/>
<input type="text" onChange={(e)=> setEmail(e.target.value) }/>

setName(txt) {
	this.setState( {
		name: txt
	})
}

setEmail(txt) {
	this.setState( {
		email: txt
	})
}


<input type="text" ref={input => this.emailRef = input} />

===============

Forward Reference ==> useful when you use 3rd party components [ KendoUI, PrimeReact, Adobe Spectrum, ..]

Most of these 3rd party components attaches the refernces passed by paretn to its internal state/behaviour


const EmailInput = React.forwardRef( (props, ref) => {
    return <input type="text" ref={ref} {...props} />
});

class App extends React.Component {
  emailRef = React.createRef(); // reference
  render() {
    return (
      <>
      <EmailInput ref={this.emailRef} size="10" page="1" />
      <button onClick={() => this.doTask()}> Click </button>
        </>
    )
  }
  
  doTask() {
    console.log("-->", this.emailRef.current.value);
    this.emailRef.current.focus();
  }
}


ReactDOM.render(<App/>, document.getElementById("app"));

======================

High Order Components [ HOC]
HOF ==> function accept function and/or returns function

HOC
1) to introduce new props and behaviour for Component
2) conditionally return component [ HourGlass or Component]

Both these components needs a counter [ times cliekd on div; times hovered on img]

class DivComponent extends React.Component {
	render() {
		return <div>
						count { this.props.count} <br />
						<button type="button" onClick={() =>this.props.increment()} />
			</div>
	}
}

class ImgComponent extends React.Component {
	//similar code but onHover= {...}
}

HOC takes a component and returns EnhancedComponent with additional props

const withCounter = (WrappedComponent) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count : 0
			}
		}

		increment = () => {
			this.setState({
				count: this.state.count + 1
				})
		}

		render() {
			return <WrappedComponent count={this.state.count} increment={this.increment} />
		}
	}
}

	
const DivWithCounter = withCounter(DivComponent);

<DivWithCounter />

===========

Parent Child re-render issues:

class Child extends React.Component {
  render() {
    console.log("child renders!!");
    return <h1> Child : { this.props.name} </h1>
  }
}
class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment = () => {
			this.setState({
				count: this.state.count + 1
				})
	}

   render() {
     console.log("Parent renders!!!")
    return (
      <>
      Count : {this.state.count} <br />
       Name: {this.state.name} <br />
        <Child name={this.state.name} /> <br />
      <button onClick={this.increment}> Click </button>
        </>
    )
  }
  
}


ReactDOM.render(<Parent/>, document.getElementById("app"));


===

shouldComponentUpdate() to prevent re-render
class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps);
  }
  render() {
    console.log("child renders!!");
    return <h1> Child : { this.props.name} </h1>
  }
}


===
Use PureComponent if props passed is primitive data and not complex objects [ nested object]
class Child extends React.PureComponent {
   render() {
    console.log("child renders!!");
    return <h1> Child : { this.props.name} </h1>
  }
}

==============

If functional components is used instead of Class Component

function Child(props) {
   console.log("child renders!!");
   return <h1> Child : {props.name} </h1>
}

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment = () => {
			this.setState({
				count: this.state.count + 1
				})
	}

   render() {
     console.log("Parent renders!!!")
    return (
      <>
      Count : {this.state.count} <br />
       Name: {this.state.name} <br />
       <Child name={this.state.name} /> <br />
      <button onClick={this.increment}> Click </button>
        </>
    )
  }
  
}


ReactDOM.render(<Parent/>, document.getElementById("app"));



Memoization using React.memo() ==> HOC

function Child(props) {
   console.log("child renders!!");
   return <h1> Child : {props.name} </h1>
}

let MemoChild = React.memo(Child); // HOC

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment = () => {
			this.setState({
				count: this.state.count + 1
				})
	}

   render() {
     console.log("Parent renders!!!")
    return (
      <>
      Count : {this.state.count} <br />
       Name: {this.state.name} <br />
       <MemoChild name={this.state.name} /> <br />
      <button onClick={this.increment}> Click </button>
        </>
    )
  }
  
}


ReactDOM.render(<Parent/>, document.getElementById("app"));

=================================================

function checkChanges(nextProps, nextState) {

}


let MemoChild = React.memo(Child, checkChanges); 


=============

React Hooks
Hooks are a new addition in React 16.8. 
They let you use state and other React features without writing a class.

Class Component:
1) state
2) behaviour
3) lifecycle methods

extends Component {

}
 
functional components are light-weight

===============================================

React Hooks:
1) useState

function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("");

	return (
			<div>
				Count {count} <br />
				<button onClick={() => setCount(count + 1)}>Click </button>
			</div>
	)
}


same as
class App extends React.Component {
	state = {
		count: 0,
		user : ""
	}

	setCount(cnt) {
		this.setState({
			count: cnt
	})
	}

	setUser(name) {
		this.setState({
			user: name
		})
	}
}


2) useReducer
	=> if state is complex object [ json / nested object ]
	=> Conditional mutation

	let initialState  = {count : 0};

	let countReducer = (state, action) => {
		switch(action.type) {
			case "DECREMENT" : return { count : state.count -1 };
			case "INCREMENT" : return {count : state.count + action.payload};
			default: return state;
		}
	}

	function App() {
		let [state, dispatch] = React.useReducer(countReducer, initialState);

		function handleIncrement() {
			let action = {"type": "INCREMENT", payload: 10};
			dispatch(action);
		}

		return (
			<div>
				Count {state.count} <br />
				<button onClick={handleIncrement}>Click </button>
			</div>
	)
	}

==
action ==> DEPOSIT, WITHDRAW
action ==> ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL

3) useContext()

Class Component using Context Consumer:


export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                <ProductConsumer>
                    {
                        value => {
                               return value.cart.map(p => <CartList key={p.id} product={p}/>)
                        		}
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}

===
Context.js

const  ProductContext = React.createContext();

export {ProductContext, ProductProvider, ProductConsumer};

export default function Cart() {
	let productContextConsumer = React.useContext(ProductContext); // get Consumer

	return <h1> {productContextConsumer.cart.map(p => <CartList product={p} key = {p.id} />)} </h1>
}


===

function Example() {
	let personContext = React.useContext(PersonContext);
	let productContext = React.useContext(ProductContext);

	return <h1> {personContext.name} {productContext.total} </h1>

}

=====

let SampleContext = React.createContext({count:10});

function App() {
	let SampleConsumer = React.useContext(SampleContext);
	..
	{SampleConsumer.count}
}

=======

4) useParams() ==> Hook by react-router-dom

check Details.js
    let {id} = useParams();


5) useEffect()
hook to simulate lifecycle methods available in class component

componentDidMount() < == once when initial mounting
componentDidUpdate() <== whenever state or props change 


function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("");

	// componentDidMount
	React.useEffect(() => {
			console.log("called effect 1", count);
	}, []);

	// componentDidUpdate
	React.useEffect(() => {
			console.log("called effect 2", count);
	});

	// called when user changes
	React.useEffect(() => {
			console.log("called effect 3", count);
	}, [user]);

	function handleIncrement() {
		setCount(count + 1);
	}

	return (
		<div>
				Count {count} <br />
				<button onClick={handleIncrement}>Click</button>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById("app"));

===




function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

6) useCallback
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.


 const incrementAge = React.useCallback(() => {
		setAge(age + 1)
	}, [age]);

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);

7) useMemo() to cache variable ==> not a HOC


========
State Management with Redux 

==========================

