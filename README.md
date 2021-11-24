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



