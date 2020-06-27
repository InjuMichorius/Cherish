/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const menuButton = document.querySelector(".hamburger");
const ul = document.querySelector(".list");

menuButton.addEventListener("click", function () {
    ul.classList.toggle("active");
});

console.log("test");