/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const menuButton = document.querySelector(".hamburger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const ul = document.querySelector(".list");

let root = document.documentElement;

window.addEventListener("load", e => {
    root.style.setProperty("--menuButtonDisplay", "block");
    root.style.setProperty("--lineDisplay", "block");

    ul.classList.toggle('nav-list')
})

const bgColorArray = ['./images/bg/1.jpg', './images/bg/2.jpg', './images/bg/3.jpg', './images/bg/4.jpg'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

if (window.innerWidth > 1000) {
    document.body.style.background = 'url(' + selectBG + ') no-repeat center center fixed';
} else {
    document.body.style.background = 'none'
}

menuButton.addEventListener("click", function () {
    if (ul.style.transform === "translateX(0%)") {
        ul.style.transform = "translateX(-100%)";
    } else {
        ul.style.transform = "translateX(0%)";
    }
})

console.log("test");