// Square Star Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let j = 0; j < num; j++){
//     str+="* ";
//   }
//   console.log(str)
// }


// Hollow Square Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let j = 0; j < num; j++){
//     if(i === 0 || i === num-1){
//       str += "* ";
//     }
//     else{
//       if(j === 0 || j === num-1){
//         str += "* ";
//       }
//       else{
//         str += "  ";
//       }
//     }
//   }
//     console.log(str);
  
// }


// Right Triangle Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let k = num - 1; k > i; k--){
//     str += "  "
//   }
//   for(let j = 0; j < i; j++){
//     str += "* "
//   }
//     console.log(str);  
// }



// Left Triangle Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let j = 0; j < i; j++){
//     str += "* "
//   }
//     console.log(str);
// }


// Downward Triangle Star Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let j = num-1; j > i; j--){
//     str += "* "
//   }
//     console.log(str);
// }



// Hollow Triangle Star Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let j = 0; j < i; j++){
//     if(i === num - 1){
//       str += "* "
//     }
//     else if(j === 0 || j === i-1){
//       str += "* "
//     }
//     else{
//       str += "  "
//     }
//   }
//     console.log(str);
// }


// Pyramid Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let k = num - 1; k > i; k--){
//     str += " "
//   }
//   for(let j = 0; j < i; j++){
//     str += "* "
//   }
//     console.log(str);
// }


// Reversed Pyramid Star Pattern
// let num = 10;
// for(let i = 0; i < num; i++){
//   let str = "";
//   for(let k = 0; k < i; k++){
//     str += " "
//   }
//   for(let j = num-1; j > i; j--){
//     str += "* "
//   }
//     console.log(str);
// }


// Hollow Pyramid Star Pattern
// let num = 10;
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let k = num; k > i; k--){
//     str += " "
//   }
//   for(let j = 1; j <= i; j++){
//     if(i === num){
//       str += "* "
//     }
//     else if(j === 1 || j === i)
//     {
//       str += "* ";
//     }
//     else{
//       str += "  "
//     }
//   }
//     console.log(str);
// }


// Diamond Pattern
// let num = 10;
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let a = num; a >= i; a--){
//     str += "  "
//   }
//   for(let b = 1; b <= i * 2 - 1; b++){
//     str += "* "
//   }
//   console.log(str);
// }
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let a = 0; a <= i; a++){
//     str += "  "
//   }
//   for(let b = (num - i) * 2  ; b > 1; b--){
//     str += "* "
//   }
//   console.log(str);
// }



// Hollow Diamond Pattern
// let num = 10;
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let a = num; a >= i; a--){
//     str += "  "
//   }
//   for(let b = 1; b <= i * 2 - 1; b++){
//     if(b === 1 || b === i * 2 - 1){
//       str += "* "
//     }
//     else{
//       str += "  "
//     }
//   }
//   console.log(str);
// }
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let a = 0; a <= i; a++){
//     str += "  "
//   }
//   for(let b = (num - i) * 2 -1 ; b >= 1; b--){
//     if(b === 1 || b === (num - i) * 2 -1 ){
//       str += "* "
//     }
//     else{
//       str += "  "
//     }
//   }
//   console.log(str);
// }


// Hourglass Star Pattern
// let num = 10;
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let a = 1; a <= i; a++){
//     str += " ";
//   }
//   for(let b = num; b >= i; b--){
//     str += "* "
//   }
//   console.log(str);
// }
// for(let i = 2; i <= num; i++){
//   let str = " ";
//   for(let a = num; a >= i; a--){
//     str += " ";
//   }
//   for(let b = 1; b <= i; b++){
//     str += "* "
//   }
//   console.log(str);
// }


// Right Pascal Star Pattern
// let num = 10;
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let j = 1; j <= i; j++){
//     str +="* ";
//   }
//   console.log(str);
// }
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let j = num - 1; j >= i; j--){
//     str +="* ";
//   }
//   console.log(str);
// }


// Left Pascal Star Pattern
// let num = 10;
// for(let i = 1; i <= num; i++){
//   let str = " ";
//   for(let k = num; k >= i; k--){
//     str += "  "
//   }
//   for(let j = 1; j <= i; j++){
//     str +="* ";
//   }
//   console.log(str);
// }
// for(let i = 2; i <= num; i++){
//   let str = " ";
//   for(let k = 1; k <= i; k++){
//     str += "  "
//   }
//   for(let j = num; j >= i; j--){
//     str +="* ";
//   }
//   console.log(str);
// }



// Pattern
// let str = "BHAVIKA";
// let len = str.length;
// let start =Number.parseInt(len / 2);
// for(let i = 0; i < len; i++){
//   let temp = ""
//   for(let k = len; k > i; k--){
//     temp += "   "
//   }
//   for(let j = 0; j <= i; j++){
//     temp += `${str[ ( start + j ) % len ]} `
//   }
//   console.log(temp)
// }

// PATTERN
// let num = 6;
// let count = 1;
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   for(let j = 1;j <= i; j++){
//     str+=`${count} `;
//     count++;
//   }
//   console.log(str)
// }

// let num = 6;
// let count = 1;
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   let count = 1;
//   for(let j = num;j >= i; j--){
//     str+=`${count} `;
//     count++;
//   }
//   console.log(str)
// }


// let num = 6;
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   for(let k = num; k >= i; k--){
//     str += " "
//   }
//   for(let j = 1; j <= i ; j++){
//     str += `${j} `;
//   }
//   console.log(str)
// }

// let num = 4;
// let count = 1
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   for(let k = num; k >= i; k--){
//     str += " "
//   }
//   for(let j = 1; j <= i ; j++){
//     str += `${count} `;
//     count++;
//   }
//   console.log(str)
// }


// let num = 6;
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   for(let j = num; j >= i ; j--){
//     str += `${j} `;
//   }
//   console.log(str)
// }


// let num = 6;
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   let count = 7-i;
//   for(let j = num; j >= i ; j--){
//     str += `${count} `;
//     count--;
//   }
//   console.log(str)
// }


// let num = 50;
// let flag = true;
// let count = 1;
// let height = 10;
// for(let i = 1 ; i <= num; i++){
//   let str = "";
//   for(let j = 1; j <= count ; j++){
    
//     str += "* ";
    
//   }
//   if(count === 1 ){
//     flag = true
//   } 
//   else if(count === height ){
//     flag = false
//   } 
//   if(flag)
//   {
//     count++;
//   }
//   else if(!flag){
//     count--
//   } 
//   console.log(str)
// }

// string cross pattern
// let str = "bhanushali";
// for(let i = 0; i < str.length; i++){
//     let temp = "";
//     for(let j = 0; j < str.length; j++){
//       if(j === i || j === str.length - i - 1){
//         temp += `${str[j]}  `
//       }
//       else{
//         temp += "  "
//       }
//     }
//     console.log(temp)
//   }