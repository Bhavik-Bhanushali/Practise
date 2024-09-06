
const m = 10, n = 10;

const arr = [];

let num = 1;

let count = 0;
let i = 0, j = 0;
let top, right, bottom, left;
top = left = 0;
bottom = m;
right = n;
let direction = "right";
const temp = [];

for(let i = 0; i < m; i++){
  arr[i] = [];
  for(let j = 0; j < n; j++){
    arr[i][j] = num++;
  }
}
console.log(arr)
i = 0;
j = 0;
while(count < m * n){
  if(direction === "right"){
    temp.push(arr[i][j++]);
    if(j === right){
        j--;
        i++;
        direction = "down";
        top++;
      }
  }
  else if(direction === "down"){
    temp.push(arr[i++][j]);
    if(i === bottom){
        j--;
        i--;
        direction = "left";
        right--;
      }
  }
  else if(direction === "left"){
    temp.push(arr[i][j--]);
      if(j === left - 1){
        j++;
        i--;
        direction = "up";
        bottom--;
      }
  }
  else if( direction === "up"){
    temp.push(arr[i--][j]);
    if(i === top - 1){
        j++;
        i++;
        direction = "right";
        left++;
      }
  }
  count++;
}
console.log(temp);









