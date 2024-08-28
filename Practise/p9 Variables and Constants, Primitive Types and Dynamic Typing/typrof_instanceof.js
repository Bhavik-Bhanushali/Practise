console.log(typeof "bhavik")
console.log(typeof 12)
console.log(typeof 12.236571)
console.log(typeof 1234567890n)
console.log(typeof true)
console.log(typeof false)
let n = null;
console.log(typeof n) // it gives object
console.log(typeof x)
const  s =Symbol("ABC");
console.log(typeof s)
console.log(typeof {name: "Bhavik"})
console.log(typeof [1,2,3,4]);
console.log(typeof new Set())
console.log(typeof new Map())
console.log(typeof function(){})
console.log(typeof new Date())
console.log(typeof Math)
console.log(Array.isArray([1,2,3,4]))
console.log(typeof "")
const d = new Date(), m = new Map(), st = new Set();
console.log(d instanceof Date);
console.log(m instanceof Map)
console.log(st instanceof Set)
console.log(typeof void(0))