// print 1 to 100 without using any Number
// let char = "e";
// for(let i = Number(true); i < char.charCodeAt(Number(false)); i++){
//   console.log(i);
// }


// print 1 to 100 without using any number and without using loops

//check anagram
// function checkAnagram(str1, str2){
//     if(str1.length !== str2.length){
//       return false;
//     }
//     let dict1 = {};
//     let dict2 = {};
//     for(let i = 0; i<str1.length; i++){
//       if(str1[i] in dict1){
//         dict1[str1[i]] +=1;
//       }
//       else{
//         dict1[str1[i]] =1;
//       }
//       if(str2[i] in dict2){
//         dict2[str2[i]] +=1;
//       }
//       else{
//         dict2[str2[i]] =1;
//       }
//     }
//     // console.log(dict1,dict2)
//     let keys1 = Object.keys(dict1);
//     let keys2 = Object.keys(dict2);
    
    
//     if(keys2.length !== keys1.length){
//       return false;
//     }
    
//     for(let i = 0; i < keys1.length; i++){
//       let key = keys1[i];
//       // console.log(dict2[key] === dict1[key])
//       if(dict2[key] !== dict1[key]){
//         return false
//       }
//     }
    
//     return true
//   }
  
  
  
//   let str1 = "bhavikb";
//   let str2 = "kivahbb";
  
//   let anagram = checkAnagram(str1, str2);
  
//   if(anagram){
//     console.log("both Strings are Anagram");
//   }
//   else{
//     console.log("both Strings are not Anagram")
//   }


// maximum number from array
// function max1(arr){
//     let maxnum = arr[0];
//     for(let i = 1; i < arr.length; i++){
//       if(arr[i] > maxnum){
//         maxnum = arr[i];
//       }
//     }
//     console.log(maxnum)
//   }
//   function max2(arr){
//     console.log(Math.max(...arr))
//   }
//   const arr = [1,3,6,7,3,44,55,77,99,0,5,8,35,68]
//   max1(arr);
//   max2(arr);


// reverse the string
// function reverseStr(str){
//     let reverse1 = ""
//     for(let i = str.length - 1; i >= 0; i--){
//       reverse1 += str[i]
//     }
//     console.log(`Method-1: ${reverse1}`)
    
//     let reverse2 = ""
//     for(let i = 0 ; i < str.length; i++){
//       reverse2 = str[i] + reverse2
//     }
//     console.log(`Method-2: ${reverse2}`)
    
//     console.log(`method-3: ${str.split("").reverse().join("")}`)
//   }
  
//   let str = "bhavik"
//   reverseStr(str)

// return even number array from given array
// function even(arr){
//     let temp = []
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 === 0){
//         temp.push(arr[i]);
//       }
//     }
//     // return arr.filter(num => num % 2 === 0)
//     return temp
    
//   }
//   const arr = [1,3,6,7,3,44,55,77,99,0,5,8,35,68];
//   const evenArr = even(arr);
//   console.log(evenArr);


//  factorial of given number
// function factorial(num){
//     if(num === 0 || num === 1){
//       return 1;
//     }
//     return num * factorial(num - 1)
//   }
//   let num = 5;
//   console.log(`factorial of ${num} is ${factorial(num)}`)


