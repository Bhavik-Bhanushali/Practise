const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];

// const copyArr1 = [...arr1]; // make copy of Array
// const copyArr1 = arr1
// arr1[1] = 3
// console.log(arr1 + " " + copyArr1)


// const mergeArr = [...arr1, ...arr2]
// const mergeArr = arr1 + arr2
// console.log(mergeArr)


// function sum(a,b,c,d){
//   return a+b+c+d;
// }
// console.log(sum(...arr2))

// ---------------------------------------

const obj1 = {a:1, b:2};
const obj2 = {b:3, c:4, d:5};

// const copyObj1 = {...obj1}
// const copyObj1 = obj1
// obj1.a = 6;
// console.log(copyObj1)

// const mergeObj = {...obj1, ...obj2} // value of b is overright by obj2 value
// const mergeObj = obj1 + obj2;
// console.log(mergeObj)

// ---------------------------------------

// destrcturing with spread operator 
// const [first, ...rest] = arr1;
// console.log(first + " " + rest);

// const {a, ...others} = obj1;
// console.log(a)
// console.log(others)

// -------------------------------------------

// const temp = [...obj1]   // we get an Error:- TypeError: obj1 is not iterable
// const temp = {...arr1};   //Output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// console.log(temp)