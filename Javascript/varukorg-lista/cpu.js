const rutaAnamn = document.querySelector("input");
const rutaMeny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

knapp.addEventListener("click", function () {
        var namn = rutaAnamn.value;
        console.log(namn);

        var cpu = rutaMeny.value;
        console.log(namn + " Har beställt: " + cpu);
       

        lista.innerHTML + "<li>" + cpu + "</li>";
        if (cpu == "Intel Xeon Gold 6244") {
                lista.innerHTML += "<li>" +
                        "<img src=\"bilder/intel 6244.webp\"> " +
                        "Intel Xeon Gold 6244 |" + " 8 kärnor - 16 trådar - 24.75 MB cache - för ThinkSystem SR630" + "</li>";
        }
        if (cpu == "AMD Ryzen ThreadRipper PRO 3995WX") {
                lista.innerHTML += "<li>" +
                        "<img src=\"bilder/Ryzen 3995WX.webp\"> " +
                        "AMD Ryzen ThreadRipper PRO 3995WX |" + " 2.7 GHz - 64-kärnig - 128 trådar - 256 MB cache - Socket sWRX8 - Box" + "</li>";
        }
        if (cpu == "AMD EPYC 7702P") {
                lista.innerHTML += "<li>" +
                        "<img src=\"bilder/AMD EPYC 7702P.webp\"> " +
                        "AMD EPYC 7702P |" + " 2 GHz - 64-kärnig - 128 trådar - 256 MB cache - Socket SP3 - PIB/WOF" + "</li>";
        }
        if (cpu == "Intel Xeon E5-2695V2") {
                lista.innerHTML += "<li>" +
                        "<img src=\"bilder/intel E-5.webp\"> " +
                        "Intel Xeon E5-2695V2 |" + "  2.4 GHz - 12-kärnor - 24 trådar - 30 MB cache - LGA2011 Socket - Box" + "</li>";
        }
        if (cpu == "Intel Xeon Gold 6144") {
                lista.innerHTML += "<li>" +
                        "<img src=\"bilder/intel 6144.webp\"> " +
                        "Intel Xeon Gold 6144 |" + " 8 kärnor - 16 trådar - 24.75 MB cache - LGA3647 Socket" + "</li>";
        }

});