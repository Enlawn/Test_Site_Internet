"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button = document.getElementById("btn");
const message = document.getElementById("message");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const windowsmenu = document.getElementById("windowsmenu");
const linuxmenu = document.getElementById("linuxmenu");
btn2.addEventListener("click", () => {
    windowsmenu.classList.toggle("hidden");
});
btn3.addEventListener("click", () => {
    linuxmenu.classList.toggle("hidden");
});
btn2.addEventListener("click", () => {
    console.log("Bouton 2 cliqué !");
});
//# sourceMappingURL=main.js.map