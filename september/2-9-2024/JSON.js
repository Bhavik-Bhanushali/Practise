// const JsonString = `{
//   "name": "git_github",
//   "version": "1.0.0",
//   "main": "index.js",
//   "type": "module",
//   "scripts": {
//     "test": "echo \'Error: no test specified\' && exit 1"
//   },
//   "temp": [1,2,3,4,5,6],
//   "number": 12.543,
//   "author": "",
//   "license": "ISC",
//   "description": "",
//   "condition": true
// }`;
// // console.log(JsonString);
// const Json = JSON.parse(JsonString);
// console.log(Json);


//  Add Date mathod in JSON
// const json1 = `{"name": "Bhavik", "DOB": "2004-06-05", "age": 20}`;
// console.log(json1);
// const obj1 = JSON.parse(json1, function(key, value){
//     if(key === "DOB"){
//         return new Date(value);
//     } else{
//         return value;
//     }
// })
// console.log(obj1);


// function in JSON write as string
// const json2 = `{"firstname": "Bhavik", "lastname": "Bhanushali", "fullname": "function(){ return this.firstname + ' ' + this.lastname}"}`;
// console.log(json2);
// const obj2 = JSON.parse(json2);
// console.log(obj2);
// obj2.fullname = eval(`(${obj2.fullname})`);
// console.log(obj2);
// console.log(obj2.fullname());


// JSON to array
// const json3 = `[1,2,3,4,5,6,7,8]`
// console.log(json3);
// const array = JSON.parse(json3)
// console.log(array);
// console.log(Array.isArray(array));


// -------------------------------------------------------------------------------
// JSON.stringify()
// const obj3 = {
//     name: "Bhavik",
//     age: 20
// }
// const json4 = JSON.stringify(obj3);
// console.log(json4);


// Date object in Json
// const obj4 = {
//     name: "Bhavik",
//     birth: new Date("2004-06-05")
// }
// const json5 = JSON.stringify(obj4)
// console.log(json5);
// // console.log(JSON.parse(json5));   // convert the Date as String


// Function to JSON
// We can not convert the function into json but we covert the function into string and add to json 
// const obj5 = {
//     fname: "Bhavik",
//     lname: "Bhannushsli",
//     fullname: function(){
//         return this.fname + " " + this.lname;
//     }
// }
// console.log(obj5);
// obj5.fullname = obj5.fullname.toString()
// console.log(obj5);
// const json6 = JSON.stringify(obj5);
// console.log(json6);

// Array to JSON
// const arr = [1,2,3,4,5,6,7,8];
// const json7 = JSON.stringify(arr)
// console.log(json7);


//practice


// const temp = {name: "BHavik", age: 20};
// console.log(temp.toString());       // output: [object Object]

// const a = [1,2,3,4,5,6]
// const j = JSON.stringify(a);
// const s = a.toString();
// const ls = a.toLocaleString()
// console.log(j + " " + typeof j);
// console.log(s + " " + typeof s);
// console.log(ls + " " + typeof ls);