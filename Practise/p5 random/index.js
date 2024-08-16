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