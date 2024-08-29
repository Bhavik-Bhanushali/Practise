// let num = 1;
// try {
//   // num.toPrecision(500)
//   // console.log(num + x)
//   // eval("alert('hello)")
//   // console.log(num.toUpperCase())
//   if(num === 1) throw "Number is equal to 1 error"
  
// } 
// catch (e) {
//   // console.log(e.name + " " + e.message)
//   console.log(e)
// }
// finally{
//   console.log("finally block is run in any condition like error accurse or not")
// }



function demo(){
    try{throw "Error"}
    finally{
      console.log("finally Executes")
    }
  }
  
  demo()