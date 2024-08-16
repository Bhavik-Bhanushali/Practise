const fImg = document.querySelector("#firstImg")
const sImg = document.querySelector("#secondImg")
let fnum = 0;
let snum = 0;
let fImgArr = [
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/violet-colorful-sunset-sky-on-the-beach-free-photo.jpeg?w=600&quality=80",
      "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
      ]

let sImgArr = [
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/violet-colorful-sunset-sky-on-the-beach-free-photo.jpeg?w=600&quality=80",
  "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
  ]
document.querySelector("button").addEventListener("click", () => {
  
  if(!(fImg.getAttribute("src") in fImgArr)){
    fImgArr.push(fImg.getAttribute("src"));
  }
  
  if(!(sImg.getAttribute("src") in sImgArr)){
    sImgArr.push(sImg.getAttribute("src"));
  }
  
  fImg.setAttribute("src",`${fImgArr[fnum]}`);
  fnum+=1;
  fnum = fnum % fImgArr.length;
  
  sImg.setAttribute("src",`${sImgArr[snum]}`);
  snum+=1;
  snum = snum % sImgArr.length;
})

fImg.addEventListener("click", () => {
  if(!(fImg.getAttribute("src") in fImgArr)){
    fImgArr.push(fImg.getAttribute("src"));
  }
  
  fImg.setAttribute("src",`${fImgArr[fnum]}`);
  fnum+=1;
  fnum = fnum % fImgArr.length;
})

sImg.addEventListener("click", () => {
  if(!(sImg.getAttribute("src") in sImgArr)){
    sImgArr.push(sImg.getAttribute("src"));
  }
  
  sImg.setAttribute("src",`${sImgArr[snum]}`);
  snum+=1;
  snum = snum % sImgArr.length;
})