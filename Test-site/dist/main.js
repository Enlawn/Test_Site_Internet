"use strict";
// const bouton = document.querySelector("#btn") as HTMLButtonElement | null;
// const message = document.querySelector("#message") as HTMLParagraphElement | null;
Object.defineProperty(exports, "__esModule", { value: true });
// let compteur = 0;
// if (bouton && message) {
//   bouton.addEventListener("click", () => {
//     compteur++;
//     message.textContent = `Tu as cliqué ${compteur} fois !`;
//   });
// } else {
//   console.error("Éléments HTML introuvables.");
// }
const button = document.getElementById("btn");
const message = document.getElementById("message");
let compteur = 0;
button.onclick = function () {
    compteur++;
};
button.onclick = function () {
    message.innerHTML = `tu as cliqué ${compteur} fois !`;
};
//# sourceMappingURL=main.js.map