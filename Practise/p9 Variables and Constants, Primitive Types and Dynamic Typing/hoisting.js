// a = 10
// console.log(a)
// var a;

// b = 12;
// console.log(b)
// let b; // referance Error

// var c = 4;
// var d = 6;
// console.log(c + " " + d)

// e = 43;
// console.log(e + " " + f)
// var e;
// var f = 14 // only declararion go to top and hoist but initialization is is not go to top

var g = 9
var h;
console.log(g + " " + h)
h = 324;  // h is declare but not initialized

show();
function show(){
  console.log("sdfdghj")
}