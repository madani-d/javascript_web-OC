var compteurElt = document.getElementById("compteur");

function diminuerCompteur() {
	var compteur = Number(compteurElt.textContent);
	if (compteur > 1) {
		compteurElt.textContent = compteur - 1;
	} else {
		clearInterval(intervalId);
		var titre = document.getElementById("titre");
		titre.textContent = "BOOM !!!";
		setTimeout(function () {
			titre.textContent = "Tout est cassé :(";
		}, 2000);
	}
}

var intervalId = setInterval(diminuerCompteur, 1000);

var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 7; //valeur de deplacement en pixels

var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null;//identifiant de l'animation
//déplace le bloc sur sa gauche
function deplacerBloc() {
	//conversion en nombre de la position gauche du bloc (valeur de la formr "XXpx")
	var xBloc = parseFloat(getComputedStyle(bloc).left);
	//conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
	var xMax = parseFloat(getComputedStyle(cadre).width);
	if (xBloc + largeurBloc <= xMax) {//si le bloc n'est pas encore au bout du cadre
		//deplement du bloc
		bloc.style.left = (xBloc + vitesse) + "px";
		//demande au navigateur d'appeler deplacerBloc le plus vite que possible
		requestAnimationFrame(deplacerBloc);
	} else {
		//annulation de l'animation
		cancelAnimationFrame(animationId)
	}
	
}
//animationId = requestAnimationFrame(deplacerBloc);