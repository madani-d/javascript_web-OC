let infosElt = document.getElementById("infos");
let contenuElt = getComputedStyle(document.getElementById("contenu"));

infosElt.innerHTML = "<p>Information sur l'élément</p>";
let ulElt = document.createElement("ul");
let hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur: " + contenuElt.height;
let largeurElt = document.createElement("li");
largeurElt.textContent = "Largeur: " + contenuElt.width;
ulElt.appendChild(hauteurElt);
ulElt.appendChild(largeurElt);
infosElt.appendChild(ulElt);

console.log(contenuElt.width);