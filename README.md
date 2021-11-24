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

==================




