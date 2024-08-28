let str = "this is 9 the 1 is is this";
console.log(str.search("the"))
console.log(str.search(/ThE/i))  // ignore case sensitivity

console.log(str.replace("the", "and"))
console.log(str.replace(/AnD/i, "the"))  // ignore case sensitivity

console.log(str.match(/is/g))  // find all match
console.log(str.match(/is/m))  // multiline matching
console.log(str.match(/is/d))  // start and end matching

console.log(str.match(/[is]/g))  // find charactor iand s
console.log(str.match(/[0-9]/g))  // find digits

console.log(str.match(/(i|s)/g))  // find all alternative separators
console.log(str.match(/\d/g)) // find all digits
console.log(str.match(/\s/g)) // find all white spaces

console.log(str.search(/\bis/))   // find the charactor start with is
console.log(str.search(/he\b/g))   // find the charactor end with he

let pattern1 = /is/;
let pattern2 = /an/
console.log(pattern1.test(str))
console.log(pattern2.test(str))

console.log(/is/.exec(str))
console.log(/an/.exec(str))