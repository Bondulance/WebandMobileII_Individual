// all of my variables
const btn = document.getElementById("mobileButton");
const menu = document.getElementById("hamburgerMenu");
const x = document.getElementById("close");

// variables for image carousel on Architecture.html
const btn1 = document.getElementById("shard");
const btn2 = document.getElementById("pauls");
const btn3 = document.getElementById("gherkin");
const imageSpace = document.getElementById("carouselImg");

console.log(btn);
// this is for my hamburger menu
btn.addEventListener("click", function() {
    console.log("btn clicked");
    // makes the div display flex, differently from its none default
    menu.style.display = "flex";
});

x.addEventListener("click", function() {
    // makes it go away
    menu.style.display = "none";
});


btn1.addEventListener("click", function() {
    console.log("btn1 clicked: image displayed is Shard");
    const value = btn1.dataset.img;
    console.log(value);
    changeCarousel(value);
});

btn2.addEventListener("click", function() {
    console.log("btn2 clicked: image displayed is St Pauls");
    const value = btn2.dataset.img;
    console.log(value);
    changeCarousel(value);
});

btn3.addEventListener("click", function() {
    console.log("btn3 clicked: image displayed is Gherkin");
    const value = btn3.dataset.img;
    console.log(value);
    changeCarousel(value);
});

function changeCarousel(path) {
    imageSpace.src = path;
    console.log("Image changed");
}