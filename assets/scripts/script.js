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

// takes in the click from btn1 and activates listener
// this is the same for the other three buttons
btn1.addEventListener("click", function() {
    console.log("btn1 clicked: image displayed is Shard");
    // console log to ensure only btn1 is clicked and activated
    // gets the image path from the html tag stored in the data attribute
    const value = btn1.dataset.img;
    console.log(value);
    // passes it to helper function as a param
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

// helper function, this takes the path from the derived data-img set as a param
// and changes the main Image of the carousel to that path
function changeCarousel(path) {
    imageSpace.src = path;
    console.log("Image changed");
}