/*function clic() {
	console.log("Clic !")
}

//var boutonElt = document.getElementById("bouton");
//boutonElt.addEventListener("click", clic);
//boutonElt.removeEventListener("click", clic);

document.getElementById("bouton").addEventListener("click", function(e) {
	console.log("Evènement : " + e.type + 
		", texte de le cible : " + e.target.textContent);

});

document.addEventListener("keypress", function (e) {
	console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

function infosClavier(e) {
	console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

function getBoutonSouris(code) {
	var bouton = "inconnu";
	switch (code) {
		case 0: //0 est le code du bouton gauche
			bouton = "gauche";
			break;
		case 1: //1 est le code du bouton du milieu
			bouton = "milieu";
			break;
		case 2: //2 est le code du bouton droit
			bouton = "droit";
			break;
	}
	return bouton;
}

function infosSouris(e) {
	console.log("Evènement souris : " + e.type + ", bouton " +
		getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

document.addEventListener("click", infosSouris);
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

window.addEventListener("load", function () {
	console.log("Page entièrement chargée");
});

window.addEventListener("beforeunload", function (e) {
	var message = "On est bien ici !";
	e.returnValue = message;
	return message;
});
*/

document.addEventListener("click", function () {
	console.log("Gestionnaire document");
});

document.getElementById("para").addEventListener("click", function () {
	console.log("Gestionnaire paragraphe");
});

document.getElementById("propa").addEventListener("click", function (e) {
	console.log("Gestionnaire bouton");
	e.stopPropagation();
});

document.getElementById("interdit").addEventListener("click", function (e) {
	console.log("Continuez plutôt a lire le cours ;)");
	e.preventDefault();
	e.stopPropagation();
});
