let ballon = document.getElementById("ballon");
let cadre = document.getElementById("cadre");
let tailleBallon = parseFloat(getComputedStyle(ballon).width);
let largeurCadre = parseFloat(getComputedStyle(cadre).width);
//let xBallon = parseFloat(getComputedStyle(cadre).left);
let vitesse = 7;

console.log(largeurCadre);
console.log(tailleBallon);
function rebondissementDroit () {
	let xBallon = parseFloat(getComputedStyle(ballon).left);
	if (xBallon + tailleBallon > largeurCadre) {
		requestAnimationFrame(rebondissementGauche);
	} else {
	ballon.style.left = (xBallon + vitesse) + "px";
	requestAnimationFrame(rebondissementDroit);
	console.log(xBallon);
	}
}

function rebondissementGauche () {
	let xBallon = parseFloat(getComputedStyle(ballon).left);
	if (xBallon > parseFloat(getComputedStyle(cadre).right)) {
		ballon.style.left = (xBallon - vitesse) + "px";
		requestAnimationFrame(rebondissementGauche);
	} else {
		requestAnimationFrame(rebondissementDroit);
	}
}

document.getElementById("demarrer").addEventListener("click", function () {
	rebondissementDroit();
	let btn = document.getElementById("arreter");
	btn.disabled = false;
	
});

document.getElementById("arreter").addEventListener("click", function () {
	cancelAnimationFrame(rebondissementDroit);
});