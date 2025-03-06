const btn = document.getElementById("mobileButton");
const menu = document.getElementById("hamburgerMenu");
const x = document.getElementById("close");
console.log(btn);

btn.addEventListener("click", function() {
    console.log("btn clicked");
    menu.style.display = "flex";
});

x.addEventListener("click", function() {
    menu.style.display = "none";
})