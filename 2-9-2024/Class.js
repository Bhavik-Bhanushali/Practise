// class demo{
//     constructor(username, email, password){
//         this.username =username;
//         this.email = email;
//         this.password = password;
//     }
//     greet(){
//         console.log("Hello, " + this.username)
//     }
// }
// const obj = new demo("bhavik", "temp@gmail.com", "1234");
// obj.greet()


// inhertance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     sound() {
//         console.log("Animal make sound!")
//     }
//     eat() {
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal {
//     constructor(name, brid) {
//         super(name);
//         this.brid = brid;
//     }
//     sound() {
//         console.log("Barking!");
//     }
//     sleep(){
//         console.log("Sleeping...");
//     }
// }
// const dog = new Dog("Tommy", "Husky");
// dog.sleep()
// dog.sound()
// dog.eat();
// console.log(dog.name + " " + dog.brid);


// Encapsulation
// class BankAccount{
//     #balance = 0;
//     constructor(owner){
//         this.owner = owner;
//     }
//     deposite(amount){
//         this.#balance += amount;
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }
// const account = new BankAccount("Bhavik");
// account.deposite(10000);
// console.log(account.getBalance());
// console.log(account.owner);
// // console.log(account.#balance);  // give an Error


// Polymorphism
// class Shape{
//     Area(){
//         return 0;
//     }
// }
// class Circle extends Shape{
//     constructor(redius){
//         super();
//         this.redius = redius;
//     }
//     Area(){
//         return Math.PI * this.redius * this.redius;
//     }
// }
// class Rectangle extends Shape{
//     constructor(width, height){
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     Area(){
//         return this.width * this.height;
//     }
// }

// const shapes = [new Circle(7), new Rectangle(5, 6)];

// shapes.forEach((shape) => {
//     console.log(shape.Area());
    
// })
// class Demo{
//     greet(){
//         console.log("Hello, User");
//     } // methods with same name is not give an Error but last methos is overright the other methods
//     greet(name){
//         console.log("Hello, " + name);
    
//     }
//     }
// const d = new Demo();
// d.greet()
// d.greet("Bhavik")


// getter and setter
// class Temp{
//     constructor(username, age){
//         this.username = username;
//         this._age = age;
//     }
//     get unam(){
//         return this.username;
//     }
//     set unam(username){
//         this.username = username;
//     }
//     get age(){
//         return this._age;
//     }
//     set age(age){
//         this._age = age;
//     }
// }
// const t = new Temp("Bhavin", 19);
// console.log(t.unam);
// t.unam ="Bhavik";
// console.log(t.unam);
// console.log(t.age);
// t.age = 20;
// console.log(t.age);


// Static 
// class Static{
//     constructor(name){
//         this.name = name;
//     }
//     static className = "Static"; // Use with only Class not access by objects
//     greet(){
//         console.log("Hello, " + this.name);
//     }
//     static show(){
//         console.log("This is a " + this.className + " Class!");
//     }
// }
// const s = new Static("Bhavik");
// s.greet()
// console.log(s.className);   // undefined
// // s.show();  // give an Error
// console.log(Static.className);
// Static.show()
