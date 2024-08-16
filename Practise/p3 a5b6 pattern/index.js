let str = "Bhavik5Het10";
let output = "";

let numbers = ['1','2','3','4','5','6','7','8','9','0'];

for(let i = 0; i < str.length;){
  
  let temp = "";
  let count = 0;
  while(!(str[i] in numbers)){
    temp += str[i];
    i++;
  }
  while(str[i] in numbers){
    count = count *10 + Number(str[i]);
    i++;
  }
  for(let j = 0; j < count; j++){
    output += temp +" ";
  }
}
console.log(output)