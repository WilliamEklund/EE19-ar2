// väljer ut elementen som ska användas
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".summa");
const knappAdd = document.querySelector(".addera");
const knappSub = document.querySelector(".subtrahera");

// Globala variabler
var antal = rutaAntal.value;
console.log("antal", antal);

var pris = rutaPris.textContent;
console.log("pris", pris);

// Räkna ut summan
var summa = antal * pris;
console.log("summa", summa);

// Skriv ut summan
rutaSumma.textContent = summa;

rutaAntal.addEventListener("input", function () {
        // läs av antal
        antal = rutaAntal.value;
        // läs av summan   
        summa = antal * pris;
        // skriv ut summan
        rutaSumma.textContent = summa + " kr";
});

// Lyssna på click knappen plus +
knappAdd.addEventListener("click", function () {
        console.log("Öka antal");
        antal++;
        // Räkna ut summan
        summa = antal * pris;
        console.log("summa", summa);
        // Skriv ut summan
        rutaSumma.textContent = summa + " kr";
        rutaAntal.value++;
});

// Lyssna på click knappen minus -
knappSub.addEventListener("click", function () {
        console.log("Minska antal");
        if (antal > 0) {
                antal--;
                rutaAntal.value = antal;
        }
        // Räkna ut summan
        summa = antal * pris;
        // Skriv ut summan
        rutaSumma.textContent = summa + " kr";

});

