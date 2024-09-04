// const arr = [[1,2,3],[4,5,6],[7,8,9]]
// const arr = [[1,2],[3,4],[5,6],[7,8]]
// const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24],[25,26,27,28]]
const arr = [];
let value = 1;

for (let i = 0; i < 10; i++) {
  arr[i] = [];
  for (let j = 0; j < 10; j++) {
    arr[i][j] = value++;
  }
}

let top, right, bottom, left;
const m = arr.length;
const n = arr[0].length;
top = left = 0;
bottom = m;
right = n;
let count = 0;
const spiral = [];
while(count < m * n){
  for(let i = left; i < right; i++){
    spiral[count++] = arr[top][i];
  }
  top++;
  for(let i = top; i < bottom; i++){
    spiral[count++] = arr[i][right -1 ];
  }
  right--;
  for(let i = right - 1; i >= left; i--){
    spiral[count++] = arr[bottom - 1][i];
  }
  bottom--;
  for(let i = bottom - 1; i >= top; i--){
    spiral[count++] = arr[i][left];
  }
  left++;
  
}
for(const x of arr){
  console.log(x)
}
console.log(spiral);