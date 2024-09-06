const animalImageLinks = [
    "https://placekitten.com/300/200",
    "https://placedog.net/300/200",
    "https://loremflickr.com/300/200/bird",
    "https://loremflickr.com/300/200/cat",
    "https://loremflickr.com/300/200/dog",
    "https://loremflickr.com/300/200/fox",
    "https://loremflickr.com/300/200/tiger",
    "https://loremflickr.com/300/200/elephant",
    "https://loremflickr.com/300/200/horse",
    "https://loremflickr.com/300/200/lion",
    "https://loremflickr.com/300/200/butterfly",
    "https://loremflickr.com/300/200/bear",
    "https://loremflickr.com/300/200/deer",
    "https://loremflickr.com/300/200/rabbit",
    "https://loremflickr.com/300/200/wolf",
    "https://loremflickr.com/300/200/zebra",
    "https://loremflickr.com/300/200/giraffe",
    "https://loremflickr.com/300/200/monkey",
    "https://loremflickr.com/300/200/whale",
    "https://loremflickr.com/300/200/dolphin"
];
const Img = document.getElementById("Img");
function changeImg() {
    let index = parseInt(Math.random() * 100);
    // Img.src = ``
    Img.src = `https://picsum.photos/200/300?random=${index}`;  
}

setInterval(() => {
    let index = parseInt(Math.random() * 100);
    document.getElementById("timeImg").src = `https://picsum.photos/200/300?random=${index}`;  
},1000)