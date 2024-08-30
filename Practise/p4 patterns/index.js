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

// number triangle with change the order in each end
// let num = 20;
// for(let i =1; i <= num; i++){
//   let str = ""
//   for(let j =1; j <= i; j++){
//     if(i % 2 === 0){
//       str += `${i - j + 1} `;
//     }
//     else{
//       str += `${j} `;
//     }
//   }
//   console.log(str)
// }


// let num = 20;
// let flag = true;
// for(let i =1; i <= num; i++){
//   let str = ""
//   for(let j =1; j <= i; j++){
//     if(flag){
//       str += `||| `;
//       flag = !flag;
//     }
//     else{
//       str += `☰ `;
//       flag = !flag;
//     }
//   }
//   if(i % 2 === 0)  flag = !flag;
//   console.log(str)
// }

// function print1(num, row, start, count){
//     let str;
//     let time = 0;
//     for(let i = row; i <= num; i++){
//       str = "";
//       let k = 1;
//       // console.log( i + " " + row)
//       for(let j = row; j <= num ; j++){
//         // console.log(i === row)
//         if(count > 1){
//           console.log( i + " " + row + (i === row));
//         }
//         if(i === row) {
//           str += `${start + k} `;
//         }
//         else if(j === num) {
//           str += `${start + num + i - 1} `
//         }
//         else if(i === num){
//           str += `${start + num + (num -1) * 2 -  k + 1} `
//         }
//         else if(j === row){ 
//           str += `${start + num + (num-1) * 2 + num - 2 - i + row + 1} ` 
//         }
//         else if(i === row + 1 && time === 0){
//           // console.log(`${num - 1} ${row + 1} ${start + num + (num - row) * 2 + num - 2 - row  + 1} ${count + 1}`)
//           str += print1(num - 1, row +1, start + num + (num - row) * 2 + num - 2 - row, count + 1);
//           // console.log(start);
//           time++;
//         }
//         k++;
//     }
    
//     if(count === 1 ){
//       console.log(str);
//     }
//     if(time === 1) time--
//     // console.log( i + " " + row)
//     }
//     return str;
//   }
  
//   let num = 6;
  
//   print1(num,1, 0, 1)
  // (j === row + 1 && i === row + 1) || (j === num - row + 1 && i === row + 1) || (j === row + 1 && i === num - row) || (j === num - row && i === num - row)


// spiral number pattern
//   const num = 7;
// const matrix = [num];
// for (let i = 0; i < num; i++) {
//   matrix[i] = []
// }
// let count = 1;
// let top = 0, right = num - 1, bottom = num - 1, left = 0;
// while(count <= num * num){
//   for(let i = left; i <= right; i++){
//     matrix[top][i] = count++;
//   }
//   top++;
//   for(let i = top; i <= bottom; i++){
//     matrix[i][right] = count++;
//   }
//   right--;
//   for(let i = right; i >= left; i--){
//     matrix[bottom][i] = count++;
//   }
//   bottom--;
//   for(let i = bottom; i >= top; i--){
//     matrix[i][left] = count++;
//   }
//   left++;
// }
// let output = ""
// for(const arr of matrix){
//   output += arr.join(" ") + "\n";
// }
// console.log(output)
// console.log(matrix)

// tree pattern
// const num = 9;
// for(let i = 1; i <= num; i++){
//   let str = ""
//   for(let j = 0; j <= num * 2; j++){
//     if(j < num - i ) str += " "
//     else if(j >= num - i && j < num) str += "("
//     else if(j === num) str += "*"
//     else if(j > num && j < num + i + 1) str += ")"
//   }
//   console.log(str)
// }

