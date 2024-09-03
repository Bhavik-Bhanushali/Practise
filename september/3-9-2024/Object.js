// prototype
// function Person(name, age, password){
//   this.name = name;
//   this.age = age;
//   this.password = password;
//   this.eyeColor = "black";
// }
// const p1 = new Person("Bhavik", 20, "12345");
// Person.nationality = "India";
// console.log(p1.nationality);

// Person.prototype.nationality = "India";
// console.log(p1.nationality);


// methodes
const obj1 = { name: "Bhavik", age: 20 };
const obj2 = { name: "Het", age: 20 };
const obj3 = {};


// // Copies properties from a source object to a target object
// // Object.assign(target, source)
// Object.assign(obj3, obj1);
// obj1.age = 22;
// console.log(obj3);


// // Creates an object from an existing object
// // Object.create(object)
// const temp = {
//     isHuman: false,
//     printMe: function(){
//         console.log(`Myname is ${this.name} and I am Human? ${this.isHuman}`);

//     }
// }
// const obj4 = Object.create(temp);
// obj4.printMe()
// console.log(obj4);


// // Returns an array of the key/value pairs of an object
// // Object.entries(object)
// const array = Object.entries(obj1);
// console.log(array);


// Creates an object from a list of keys/values
// Object.fromEntries()
// const map = new Map([
//     ["name", "Bhavik"],
//     ["age", 20]
// ])
// const obj5 = Object.fromEntries(map);
// console.log(obj5);


// // Returns an array of the keys of an object
// // Object.keys(object)
// const keys = Object.keys(obj1);
// console.log(keys);


// // Returns an array of the property values of an object
// // Object.values(object)
// const values = Object.values(obj1);
// console.log(values);


// // Groups object elements according to a function
// // Object.groupBy(object, callback)
// const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
// ];
// const newObj = Object.groupBy(inventory, ({type}) => type)
// console.log(newObj);




// Properties

// defineProperty
// const Person = {
//     name: "Bhavik",
//     age: 20,
//     language: "Gujarati"
// }
// console.log(Person);
// Object.defineProperty(Person, "eyeColor", { value: "brown", enumerable: true });  // Add property
// console.log(Person.eyeColor);
// console.log(Person);    // eyeColor is not show in key-value pair but it is the property of Object

// Object.defineProperty(Person, "language", { value: "Hindi" });
// console.log(Person);

// console.log(Object.getOwnPropertyNames(Person));

// // enumerable is works visibility of Object property when we print Object
// console.log(Object.keys(Person));
// Object.defineProperty(Person, "language", {enumerable: false}); // give all properties
// console.log(Object.keys(Person));   // give only enumerable properties


// Adding getter & Setter
// const obj = {counter: 0};
// // Object.defineProperty(obj, "reset", {
// //     get: function(){this.counter = 0}
// // })
// // Object.defineProperty(obj, "increment", {
// //     get: function(){this.counter++}
// // })
// // Object.defineProperty(obj, "decrement", {
// //     get: function(){this.counter--}
// // })
// // Object.defineProperty(obj, "add", {
// //     set: function(value){this.counter += value}
// // })
// // Object.defineProperty(obj, "subtract", {
// //     set: function(value){this.counter -= value}
// // })
// Object.defineProperties(obj,{
//     reset:{
//         get: function(){this.counter = 0}
//     },
//     increment:{
//         get: function(){this.counter++}
//     },
//     decrement:{
//         get: function(){this.counter--}
//     },
//     add:{
//         set: function(value){this.counter += value}
//     },
//     subtract:{
//         set: function(value){this.counter -= value}
//     }
// });
// console.log(obj.counter);
// obj.increment;
// console.log(obj.counter);
// obj.decrement;
// console.log(obj.counter);
// obj.add = 5;
// console.log(obj.counter);
// obj.subtract = 2;
// console.log(obj.counter);
// obj.reset;
// console.log(obj.counter);


// const person = {
//     firstName: "Bhavik",
//     lastName: "Bhanushali",
//     // fullName: function(){
//     //     return this.firstName + " " + this.lastName;
//     // },
//     get fullName(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// // console.log(person.fullName());
// // console.log(person);

// console.log(person.fullName);   // access fullname as property
// console.log(person);

// const temp = JSON.stringify(person);    // covert the value of fullName to (this.firstName+ " " + this.lastName)
// console.log(JSON.parse(temp));



//  protecton
const demo = {
    name: "Bhavik",
    age: 20
}

// Object.preventExtensions(demo);     // not allow to add properties but we can remove(delete) the properties
// // demo.language = "JS";    // TypeError: Cannot add property language, object is not extensible

// console.log(Object.isExtensible(demo));

// delete demo.age;
// console.log(demo);

// we can also sea; the Arrays
// Object.seal(demo);  // not allow add and delete properties of Object but we can change the value of the property
// console.log(Object.isSealed(demo));
// // demo.language = "JS";
// // delete demo.age;    // TypeError: Cannot delete property 'age' of #<Object>
// Object.defineProperty(demo, "age", {value: 21});
// console.log(Object.entries(demo));


// Object.freeze(demo);
// console.log(Object.isFrozen(demo));     // not allow any change into the object
// // demo.language = "JS";
// // delete demo.age;
// // Object.defineProperty(demo, "age", {value: 21});    // TypeError: Cannot redefine property: age