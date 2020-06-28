/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const menuButton = document.querySelector(".hamburger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const ul = document.querySelector(".list");

const bgColorArray = ['./images/bg/1.jpg', './images/bg/2.jpg', './images/bg/3.jpg', './images/bg/4.jpg'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

if (window.innerWidth > 1000) {
    document.body.style.background = 'url(' + selectBG + ') no-repeat center center fixed';
} else {
    document.body.style.background = 'none'
}

menuButton.style.display = "block"
menuButton.style.position = "fixed"
menuButton.style.cursor = "pointer"
menuButton.style.top = "0.8rem"
menuButton.style.left = "0.8rem"

line1.style.backgroundColor = 'white'
line1.style.width = '25px'
line1.style.height = '3px'
line1.style.margin = '5px'

line2.style.backgroundColor = 'white'
line2.style.width = '25px'
line2.style.height = '3px'
line2.style.margin = '5px'

line3.style.backgroundColor = 'white'
line3.style.width = '25px'
line3.style.height = '3px'
line3.style.margin = '5px'

ul.style.display = "block"
ul.style.width = "100%"
ul.style.height = "7rem"
ul.style.textAlign = "center"
ul.style.position = "fixed"
ul.style.backgroundColor = "#E00359"
ul.style.transform = "translateX(-100%)"
ul.style.zIndex = "100"

menuButton.addEventListener("click", function () {
    if (ul.style.transform === "translateX(0%)") {
        ul.style.transform = "translateX(-100%)";
    } else {
        ul.style.transform = "translateX(0%)";
    }
})

console.log("test");