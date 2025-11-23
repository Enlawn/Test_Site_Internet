



const button = document.getElementById("btn") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;


const btn2 = document.getElementById("btn2") as HTMLImageElement;
const btn3 = document.getElementById("btn3") as HTMLImageElement;

const windowsmenu = document.getElementById("windowsmenu") as HTMLDivElement;
const linuxmenu = document.getElementById("linuxmenu") as HTMLDivElement;

btn2.addEventListener("click", () => {
    windowsmenu.classList.toggle("hidden");
});

btn3.addEventListener("click", () => {
    linuxmenu.classList.toggle("hidden");
});

