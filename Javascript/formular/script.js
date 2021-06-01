// "Connecta" till element vi använder
const rutaAntal = document.querySelector(".antal");
const rutaPris = document.querySelector(".pris");
const rutaWifi = document.querySelector(".wifi");
const rutaparkering = document.querySelector(".parkering");
const knappen = document.querySelector("button");
const rutaPrisRummet = document.querySelector(".prisRummet");
const rutaPristillägg = document.querySelector(".pristillägg");
const rutaTotal = document.querySelector(".total");
// När man klicka på knappen
knappen.addEventListener("click", function() {
    console.log(rutaAntal.value);
    console.log(rutaPris.value);
    console.log(rutaWifi.value);
    console.log(rutaparkering.value);

    // Räkna ut delsumma för rummet, antal * pris-för-rummet
    rutaprisRummet.value = rutaAntal.value * rutapris.value;
    // Räkna u delsumma för tilläggen, wifi + parkering
    rutaPristillägg.value = Number(rutaWifi.value) + Number(rutaparkering.value);
    // Räkna ut tothlsumman, pris-för-rummet + alla-tillägg
    rutaTotal.value = Number(rutaAntal.value * rutaPris.value) + Number(rutaWifi.value) + Number(rutaParkering.value);
});