//liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
let contenuElt = document.getElementById("contenu");

for (var i = 0; i < journaux.length; i++) {
	let lienElt = document.createElement("a");
	lienElt.textContent = journaux[i];
	lienElt.href = journaux[i];
	contenuElt.appendChild(lienElt);
	contenuElt.appendChild(document.createElement("br"));
}