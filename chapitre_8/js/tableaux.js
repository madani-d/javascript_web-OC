let tableauElt = document.getElementById("tableau");
let cadreElt = document.createElement("tr");
tableauElt.appendChild(cadreElt);
let categories = ["Nom", "Année", "Auteur"];
for (let i = 0; i < categories.length; i++) {
    let categorie = document.createElement("th");
    categorie.textContent = categories[i];
    cadreElt.appendChild(categorie);
}
function fill(cat) {
    let catElt = document.createElement("td");
    catElt.textContent = cat;
    return catElt;
}

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    let oeuvres = JSON.parse(reponse);
   console.log(oeuvres.nom);
  /* let lineElt = document.createElement("tr");
   tableauElt.appendChild(lineElt);
   oeuvres.forEach(element => {
        console.log(element.nom);
        let catElt = document.createElement("td");
        catElt.textContent = element.nom;
        lineElt.appendChild(catElt);
    
   });
   */
     oeuvres.forEach(function (oeuvre) {
        let lineElt = document.createElement("tr");
        tableauElt.appendChild(lineElt);    
        lineElt.appendChild(fill(oeuvre.nom));
        lineElt.appendChild(fill(oeuvre.annee));
        lineElt.appendChild(fill(oeuvre.auteur));
    });
    
})