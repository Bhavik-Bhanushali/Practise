// "use strict";
// x= 10;
// console.log(x) // reference Error

// show();
// function show(){ a = 10 } // ReferenceError: a is not defined


// ------------------------
// x  = 10;  // not give any Error
// show();   // only function is run in strict mode
// function show(){
//   "use strict";
//   y = 234 // ReferenceError: y is not defined
// }

// --------------------------------
// "use strict";
// a = {x:10,y:20};  // ReferenceError: a is not defined

// let b = 12;
// delete b; // SyntaxError: Delete of an unqualified identifier in strict mode.

// function demo(){}
// Delete demo;  // SyntaxError: Unexpected identifier

// function show(p1,p1){}  // SyntaxError: Duplicate parameter name not allowed in this context

// let c = 010;  // SyntaxError: Octal literals are not allowed in strict mode.

// let d = "\010"; // SyntaxError: Octal escape sequences are not allowed in strict mode.

// const obj = {}
// Object.defineProperty(obj, "x",{value: 0, writable: false});
// obj.x = 1234  // TypeError: Cannot assign to read only property 'x' of object '#<Object>'

// const obj2 = {get x(){return 0}};
// obj2.x = 1234   // TypeError: Cannot set property x of #<Object> which has only a getter

// delete Object.prototype;  // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// let eval = 123; //SyntaxError: Unexpected eval or arguments in strict mode

// let arguments = "134" // SyntaxError: Unexpected eval or arguments in strict mode

// with (Math){x = cos(2)};  // SyntaxError: Strict mode code may not include a with statement


// eval("x = 2");  // ReferenceError: x is not defined

// eval("var x = 2")
// console.log(x)  // ReferenceError: x is not defined

// eval("let x = 2");
// console.log(x);   // ReferenceError: x is not defined

// function show(){
//   console.log(this);  // undefined
// }
// show()

// -------------------------------------------------
// do not use this wordsas variable in strict mode
// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield


// "use strict"
// let public = "afg";   // SyntaxError: Unexpected strict mode reserved word