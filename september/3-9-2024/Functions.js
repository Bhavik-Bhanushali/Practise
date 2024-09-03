//Defining te function
// function Demo1(){
//     // Code
// }

// const demo2 = function(){
//     // Code
// }

// const demo3 = () => {
//     // Code
// }

// const demo4 = new Function("","// code")
// const demo5 = (x,y) => x * y;


// Call
// const person1 = {
//     fname: "Bhavik",
//     lname: "Bhanushali",
//     fullname: function(){
//         return this.fname + " " + this.lname;
//     }
// };
// const person2 = {
//     fname: "Het",
//     lname: "Patel"
// };
// console.log(person1.fullname());
// console.log(person1.fullname.call(person2));

// function temp1(age){
//     return `I am ${this.fname + " " + this.lname} and I'm ${age} year old`;
// }
// console.log(temp1.call(person1,20));
// console.log(temp1.call(person2,21));



// Apply
// const person3 = {
//     fname: "Bhavik",
//     lname: "Bhanushali",
//     fullname: function(){
//         return this.fname + " " + this.lname;
//     }
// };
// const person4 = {
//     fname: "Het",
//     lname: "Patel"
// };
// console.log(person3.fullname());
// console.log(person3.fullname.apply(person4));   // call and apply work same but apply take parameters as Array

// function temp2(a, b, c){
//     console.log(this.fname + " " + this.lname);
//     return a + b + c;
// }
// console.log(temp2.apply(person3,[1,2,3]));
// console.log(temp2.apply(person4,[4,5,6]));



// Bind
// const person5 = {
//     fname: "Bhavik",
//     lname: "Bhanushali",
//     fullname: function(){
//         return this.fname + " " + this.lname;
//     }
// };
// const person6 = {
//     fname: "Het",
//     lname: "Patel"
// };
// const fullname = person5.fullname.bind(person6)
// console.log(person5.fullname());
// console.log(fullname());

// function temp3(){
//     return this.fname + " " + this.lname;
// }
// const bindP6 = temp3.bind(person6);
// console.log(bindP6());


// JavaScript Closures
function Pass(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
    
}
const increment = Pass();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());


