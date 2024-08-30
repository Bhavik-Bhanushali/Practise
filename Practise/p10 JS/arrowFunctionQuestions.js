// Problem 1: Arrow Functions and "this"
// Problem: You have an object representing a user. The object contains a method that prints the user's name after a delay. However, the arrow function in the method does not behave as expected. Fix the code so that it correctly prints the user's name after the delay.
// const user = {
//     name: "Alice",
//     printName: function() {
//       setTimeout(() => {
//         console.log(`User's name is ${this.name}`);
//       }, 1000);
//     }
//   };
  
//   user.printName(); // Expected output after 1 second: "User's name is Alice"

// Challenge: Rewrite the printName method without using an arrow function inside setTimeout but still ensuring the correct this context.
//ans
// const user = {
//     name: "Alice",
//     printName: function() {
//       // console.log(this.name)
//       setTimeout(function(){
//         console.log(`User's name is ${this.name}`);
//       }.bind(this), 2000);
//     }
//   };
  
//   user.printName(user.name); // Expected output after 1 second: "User's name is Alice"
  

// Problem 2: Arrow Functions with arguments
// Problem: Arrow functions do not have their own arguments object. Implement a function sumAll that uses an arrow function to calculate the sum of all its arguments.
// const sumAll = (...args) => {
//     // Implement the function body
//   };
  
//   console.log(sumAll(1, 2, 3, 4)); // Expected output: 10
//   console.log(sumAll(5, 10, 15)); // Expected output: 30

// Challenge: Modify the function so it uses an arrow function for summing but without using the rest parameters (...args). Is it possible?
// ans
// const sumAll = function(){
//     return [...arguments].reduce((a,b) => a + b, 0)
//   }; 
  
//   console.log(sumAll(1, 2, 3, 4)); // Expected output: 10
//   console.log(sumAll(5, 10, 15)); // Expected output: 30


// Problem 3: Arrow Functions as Object Methods
// Problem: Arrow functions do not have their own this context, which can lead to unexpected results when used as methods in objects. Given the following object, rewrite the method so that it works correctly without using an arrow function.
// const counter = {
//     count: 0,
//     increment: () => {
//       this.count++;
//       console.log(this.count);
//     }
//   };
  
//   counter.increment(); // Expected output: 1, but it doesn't work as intended. Fix it.
  
// Challenge: Explain why using an arrow function in this case causes issues with this.
// ans
// const counter = {
//     count: 0,
//     increment: function() {
//       this.count++;
//       console.log(this.count);
//     }
//   };
  
//   counter.increment(); // Expected output: 1, but it doesn't work as intended. Fix it.


// Problem 4: Arrow Functions and Constructor Functions
// Problem: Arrow functions cannot be used as constructors. Given the following constructor function, identify the issue and correct it.
// const Person = (name, age) => {
//     this.name = name;
//     this.age = age;
//   };
  
//   const person1 = new Person("Bob", 30); // Expected: Error. Fix it.
  
// Challenge: Explain why arrow functions cannot be used as constructors and rewrite the Person function using a regular function expression.
// ans
// const Person = function(name, age) {
//     this.name = name;
//     this.age = age;
//   };
  
//   const person1 = new Person("Bob", 30); // Expected: Error. Fix it.


// Problem 5: Array Method Chaining with Arrow Functions
// Problem: Given an array of numbers, use arrow functions to perform the following operations in a single chain:
// const numbers = [3, 6, 9, 12, 15];

// const result = numbers
//   // Complete the chain here

// console.log(result); // Expected output: 54 (12 + 15 + 27)

// Double each number.
// Filter out numbers less than 10.
// Sum the remaining numbers.

// Challenge: Rewrite the chain using regular functions instead of arrow functions. Compare the readability and conciseness of both approaches.
// ans
// const numbers = [3, 6, 9, 12, 15];
// function doubleNum(arr){
//     const temp = []
//     for(let i = 0; i < arr.length; i++){
//       temp.push(arr[i] * 2);
//     }
//     return temp;
//   }
//   function filterOut(arr){
//     const temp = [];
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] < 10) temp.push(arr[i])
//       return temp
//     }
//   }
//   function Sum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     return sum
//   }
  
// const result = Sum(filterOut(doubleNum(numbers)));

// const result = ((numbers.map(x => x * 2)).filter(x => x < 10)).reduce((a, b) => a + b, 0);
  
// console.log(result);


// Problem 6: Arrow Functions in Higher-Order Functions
// Problem: Write a higher-order function operation that takes two numbers and an arrow function as its arguments. The arrow function should define the operation to be performed on the two numbers.
// const operation = (a, b, func) => {
//     // Implement the higher-order function
//   };
  
//   const add = (a, b) => a + b;
//   const multiply = (a, b) => a * b;
  
//   console.log(operation(5, 10, add)); // Expected output: 15
//   console.log(operation(5, 10, multiply)); // Expected output: 50
  
// Challenge: Modify the operation function so that it accepts any number of arguments and applies the arrow function to all of them (like a custom reduce function).
// ans
// const operation = (func, ...arr) => func(arr);

// const add = (arr) => arr.reduce((a, b) => a + b, 0);
// const multiply = (arr) => arr.reduce((a, b) => a * b, 1)

// console.log(operation(add,5, 10, 15,20,25,30,35)); 
// console.log(operation( multiply, 5, 10, 15)); 


// Problem 7: Arrow Functions and Default Parameters
// Problem: Write an arrow function createGreeting that takes a name and returns a greeting message. If no name is provided, it should return a default greeting.
// const createGreeting = (name) => {
//     // Implement the function with a default parameter
//   };
  
//   console.log(createGreeting("Alice")); // Expected output: "Hello, Alice!"
//   console.log(createGreeting()); // Expected output: "Hello, Guest!"
  
// Challenge: Enhance the createGreeting function so that it accepts an optional second parameter, greeting, which can customize the greeting message (e.g., "Hi", "Welcome").
// ans
// const createGreeting = (name = "user", greet = "Hello") => `${greet}, ${name}!`

// console.log(createGreeting("Alice")); 
// console.log(createGreeting()); 
// console.log(createGreeting("Alice", "Hi"))



// Problem 8: Arrow Functions and this in Event Listeners
// Problem: You have a button on a webpage that should increase a counter every time it's clicked. However, the arrow function does not update the counter as expected. Fix the code so that it works correctly.
// function Counter() {
//     this.count = 0;
//     document.querySelector("button").addEventListener("click", () => {
//       this.count++;
//       console.log(this.count);
//     });
//   }
  
//   const myCounter = new Counter();
  
// Challenge: Rewrite the event listener function without using an arrow function but ensuring the correct this context is maintained.
// ans
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello, World!</title>
//   </head>
//   <body>
//       <button>Button</button>
//       <script >
//        function Counter() {
//           this.count = 0;
//         //   document.querySelector("button").addEventListener("click", () => {
//         //     this.count++;
//         //     console.log(this.count);
//         //   });
//         document.querySelector("button").addEventListener("click", function() {
//             this.count++;
//             console.log(this.count);
//           }.bind(this));
//         }
        
//         const myCounter = new Counter();

//       </script>
//   </body>
// </html>


// Problem 9: Arrow Functions and Array sort()
// Problem: Use an arrow function to sort an array of objects by a specific property. Given an array of objects representing people, sort them by age.
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20 }
//   ];
  
//   const sortedPeople = people.sort(/* Implement the arrow function here */);
  
//   console.log(sortedPeople);
//   // Expected output: 
//   // [
//   //   { name: "Charlie", age: 20 },
//   //   { name: "Alice", age: 25 },
//   //   { name: "Bob", age: 30 }
//   // ]
  
// Challenge: Rewrite the sorting logic using a regular function and compare it with the arrow function approach.
// ans
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20 }
//   ];
  
//   // const sortedPeople = people.sort((a, b) => a.age - b.age);
//   const sortedPeople = people.sort(function(a, b){
//     return a.age - b.age;
//   });
  
//   console.log(sortedPeople);
  
  