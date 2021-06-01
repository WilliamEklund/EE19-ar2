 // Koden som körs först
 // Element som jag behöver komma åt
 const rutaPasta = document.querySelector(".pasta");
 const rutaLax = document.querySelector(".lax");
 const rutaGrädde = document.querySelector(".grädde");
 const rutaBuljong = document.querySelector(".buljong");
 const knappBeställ = document.querySelector(".btn-primary");
 const rutaLista = document.querySelector("textarea");
 const rutaSumma = document.querySelector(".summa");

 class Produkter {
     constructor(namn, pris) {
         this.namn = namn;
         this.pris = pris;
     }
 }
 var pasta = new Produkter('Pasta 300g', 29);
 var lax = new Produkter('lax 400g', 99);
 var grädde = new Produkter('Grädde 2,5dl', 15);
 var buljong = new Produkter('buljong 5g', 5);
 console.log(pasta);
 console.log(lax);
 console.log(grädde);
 console.log(buljong);
 
 knappBeställ.addEventListener("click", function() {


 })