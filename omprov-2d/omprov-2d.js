 // Koden som körs först
 // Element som jag behöver komma åt
 const rutaPasta = document.querySelector(".pasta");
 const rutaLax = document.querySelector(".lax");
 const rutaGrädde = document.querySelector(".grädde");
 const rutaBuljong = document.querySelector(".buljong");
 const knappBeställ = document.querySelector(".btn-primary");
 const textRutaLista = document.querySelector("textarea");
 const rutaSumma = document.querySelector(".summa");



 knappBeställ.addEventListener("click", function() {
     var pasta = rutaPasta.value;
     console.log("pasta", pasta);
     var lax = rutaLax.value;
     console.log("lax", lax);
     var grädde = rutaGrädde.value;
     console.log("grädde", grädde);
     var buljong = rutaBuljong.value;
     console.log("buljong", buljong);

     var lista = "Pasta 300g (29:-) " + pasta + " styck" + "  Laxfilé 400g (99:-) " + lax + " styck" + "   Grädde 2,5dl (15:-) " + grädde + " styck" + "   Buljong 5g (5:-) " + buljong + " styck";
     console.log(lista);

     textRutaLista.textContent = lista;
rutaSumma.value = Number(pasta) * 29 + Number(lax) * 99 + Number(grädde) * 15 + Number(buljong) * 5;
     //rutaSumma.value = pasta = Number(29) && lax == Number(99) && grädde == Number(15) && buljong == Number(5);

    if (pasta == "") {
            textRutaLista.value = "Du missade antal";
    }

 });