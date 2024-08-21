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


// prime number check
// function checkPrime(num){
//     if(num === 1){
//       console.log("1 is neither prime nor not-prime!!")
//       return
//     }
//     else if(num === 2){
//       console.log("2 is prime number")
//       return
//     }
//     for(let i = 2; i <= Math.sqrt(num) + 1; i++){
//       if(num % i === 0){
//         console.log(`${num} is not a prime number`)
//         return
//       }
//     }
//     console.log(`${num} is prime number`)
//   }
//   checkPrime(5)
//   checkPrime(10)

// find the largest element from the nested array
// function max(arr){
//     let tempArr = arr.flat(Infinity)
//     let maxnum = tempArr[0]
//     for(let i of tempArr){
//       if(i > maxnum) maxnum = i;
//     }
//     return maxnum
//   }
//   let arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
//   console.log(max(arr))


// fibonacci series
// function fibonacci(arr){
//     let fibArr = [0];
//     let temp;
//     if(num >= 2){
//       fibArr.push(1);
//     }
//     for(let i = 2; i < num; i++){
//       temp = fibArr[i - 1] + fibArr[i - 2];
//       fibArr.push(temp)
//     }
//     return fibArr
//   }
//   let num = 15
//   console.log(fibonacci(num))


// titlelize the string
// function capital(str){
//     str = str.charAt(0).toUpperCase() + str.substring(1);
//     for(let i = 0; i < str.length; i++){
//       if(str[i] === " "){
//           i++;
//           str = str.substring(0,i)+ str.charAt(i).toUpperCase() + str.substring(i+1)
//           console.log(str)
//       }
//     }
//     return str
//   //   return str.replace(/\b\w/g, l => l.toUpperCase()); 
//   }
//   let str = "bhavik bhanushali"
//   str[0] = "t"
//   console.log(capital(str))
//   console.log(str.toUpperCase())

// reverse stirng,reverse words and reverse each word
// function reverseWithSeparator(str,separator){
//     return str.split(separator).reverse().join(separator)
// }
  
// let str = "Today is best day of my life"
// console.log("reverse string:-",reverseWithSeparator(str,""))
// console.log("reverse words in string:-",reverseWithSeparator(str," "))
// console.log("reverse each word of string:-",reverseWithSeparator(reverseWithSeparator(str,"")," "))


// check palindrome number and string
// function isPalindromeStr(str){
//     let temp = str.split("").reverse().join("");
//     if(temp === str){
//       console.log(`${str} is Palindrome`);
//     }
//     else{
//       console.log(`${str} is not Palindrome`);
//     }
//   }
//   function isPalindromeNum(num){
//     let temp = num;
//     let reverseNum = 0;
//     let reminder;
//     while(temp !== 0){
//       reminder = temp % 10
//       reverseNum = reverseNum * 10 + reminder;
//       temp = parseInt(temp / 10)
//     }
//     if(reverseNum === num){
//       console.log(`${num} is Palindrome Number`);
//     }
//     else{
//       console.log(`${num} is not Palindrome Number`);
//     }
//   }
//   let str1 = "Bhavik";
//   let str2 = "level";
//   isPalindromeStr(str1);
//   isPalindromeStr(str2);
//   isPalindromeNum(123456)
//   isPalindromeNum(123321)

// sum of array element
// function sumArr(arr){
//     let sum =0;
//     arr.map(num => sum += num)
//     return sum;
//   }
//   let arr = [1,23,45,56,44,87,97,67];
//   console.log(sumArr(arr))


// count Vowels in given string
// function countVowels(str){
//     const vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(let c of str){
//       if(vowels.includes(c)){
//         count++;
//       }
//     }
//     console.log(`${count} Vowels in this string:-${str}`)
//   } 
  
//   let str = "today is best day of my life";
//   countVowels(str)


// remove duplicates from array
// function removeDuplicate(arr){
//     let a = new Set(arr);
//     return Array(...a)
//   }
//   let a = [1,2,3,1,2,4,5,6,7,2,1,3,5,6,4];
//   console.log(removeDuplicate(a))


