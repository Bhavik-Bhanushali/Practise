// Call
// function Talk(){
//   console.log(`Talking to ${this.name} ...`);
// }

// function demo(greet){
//   console.log(greet + ", " + this.name);
// }

// const person = { name: "Bhavik"};
// const user ={ name: "Brilworks"};

// Talk.call(person)
// Talk.call(user)
// Talk()

// demo.call(person, "Hello")
// demo.call()

// --------------------------------------
// Apply
// function greeting(greet, end){
//   console.log(`${greet}, ${this.name} ${end}`);
// }

// const person = { name: "Bhavik"};
// greeting.apply(person, ["Hi", "?"])
// greeting.apply(person, ["Hi",])
// greeting.apply(person)
// greeting()
// greeting.apply()

// --------------------------------------
// Bind
// function greet(greeting, punctuation){
//   console.log(`${greeting} ${this.name} ${punctuation}`)
// }

// const person = { name: "Bhavik"}
// const greetBind = greet.bind(person, "Hello");
// greetBind("?");
// const temp = greet.bind();
// temp();