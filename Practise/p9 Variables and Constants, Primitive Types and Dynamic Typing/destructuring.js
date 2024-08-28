const obj = {
    fname: "Bhavik",
    lname: "Bhanushali", 
    age: 20
  };
  const arr = [1,2,3,4,5];
  const str = "Bhavik";
  const map = new Map([
    ["apple", 200],
    ["banana", 500],
    ["cherry", 100]
    ]);
  
  let {fname, country = "India", lname} = obj;
  console.log(fname + " " + lname + " " + country);
  let {fname: name} = obj
  console.log(name)
  
  let [s1,s2,s3,s4,s5,s6] = str;
  console.log(s1+s2+s3+s4+s5+s6);
  let [fc,,,,,ac] = str;    // extra commas skip the value by 1
  console.log(fc + " " + ac);
  let {[0]: sfe, [str.length - 1]: sle} = str;
  console.log(sfe + " " + sle)
  
  
  let [i1, i2] = arr;
  console.log(i1+ " " + i2)
  let {[0]:afe, [arr.length - 1]: ale} = arr;
  console.log(afe + " " + ale);
  
  let text = ""
  for(const [key, value] of map){
    console.log(key + " " + value)
  }