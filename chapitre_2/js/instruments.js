function infosLiens() {
	let listLiensElts = document.getElementsByTagName("a");
	console.log(listLiensElts.length);
	console.log(listLiensElts[0].href);
	console.log(listLiensElts[listLiensElts.length - 1].href);
}

infosLiens();

function possede(id, classe) {
	let targetElt = document.getElementById(id);
	if (targetElt !== null) {
		console.log(targetElt.classList.contains(classe));
	} else {
		console.log("Aucun élément ne posséde l'identifiant " + id);
	}
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur

function possed(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }
}

infosLiens();

possed("saxophone", "bois"); // Doit afficher true
possed("saxophone", "cuivre"); // Doit afficher false
possed("trompette", "cuivre"); // Doit afficher true
possed("contrebasse", "cordes"); // Doit afficher false