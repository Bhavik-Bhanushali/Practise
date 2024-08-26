// const obj = {
//   firstName : "Bhavik",
//   lastName : "Bhanushali",
//   age : 20,
//   contact : 9326542426,
//   fullName : function (){
//     return this.firstName + " " + this.lastName
//   },
//   myCars : {
//     car1 : "BMW",
//     car2 : "Audi",
//     car3 : "Thar",
//     bestCar : function (){
//       return this.car3
//     }
//   }
// }
// console.log(obj.firstName)
// console.log(obj["firstName"])
// console.log(obj.fullName())
// console.log(obj["fullName"]())

// console.log(obj)
// obj.natinality = "India";
// obj["natinality"] = "India"
// console.log(obj)

// console.log(obj.myCars.car1)
// console.log(obj.myCars.bestCar())

// obj.intro = function() {
//   return `My name is ${this.fullName()} and I am ${this.age} year old.`
// };
// console.log(obj);
// console.log(obj.intro())
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(JSON.stringify(obj))

// function Person(first, last, age, contact){
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.contact = contact;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName
//   }
// }
// const father = new Person("M", "Bhanushali", 50, 8779314061);
// // console.log(father)
// console.log(father.fullName())