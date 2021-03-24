// Koden som körs först
// Element som ska defineras

// input
const rutaAnamn = document.querySelector(".user");
const rutaLösen = document.querySelector(".password");
// button
const knappLogin = document.querySelector(".btn-login");
const knappKontroll = document.querySelector(".btn-controll");
// textarea
const rutaSvar = document.querySelector(".output");
// button
const knappDemo = document.querySelector(".btn-info");
const knappTöm = document.querySelector(".btn-danger");

// Globala variabler


// Kod som körs när användaren klickar på knappen Logga in
knappLogin.addEventListener("click", function () {
    // Läs av användarnamnet och lagra i en lokal variabel
    var anamn = rutaAnamn.value;
    // Läs av lösenordet och lagra i en lokal variabel
    var lösen = rutaLösen.value;
    // Skriv ut användarnamnet i loggen
    console.log(anamn);
    // Skriv ut lösenordet i loggen
    console.log(lösen);
    // Skriv ut användarnamnet och lösenordet i rutaSvar
    rutaSvar.value = anamn + " " + lösen;

    // Är användarnamnet "admin" skriv ut "Användarnamn ok" i rutaSvar
    if (anamn == "admin") {
        rutaSvar.value = "ok";
    }
    // Är användarnamnet "admin" och lösenordet "super" skriv ut "Inloggad!" i rutaSvar
    // Annars skriv ut "Något är fel!"
    if (anamn == "admin" && lösen == "super") {
        rutaSvar.value = "Inloggad!";
    } else {
        rutaSvar.value = "Något blev fel";
    }

})