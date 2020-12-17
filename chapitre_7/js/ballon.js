let demarreElt = document.getElementById("demarrer");
let arreterElt = document.getElementById("arreter");
let ballon = document.getElementById("ballon");
let cadre = document.getElementById("cadre");
let rebondId = null;
let tailleBallon = parseFloat(getComputedStyle(ballon).width);
let tailleCadre = parseFloat(getComputedStyle(cadre).width);
let sens = 1;
let vitesse = 7;

function rebond() {
	xBallon = parseFloat(getComputedStyle(ballon).left);
	
	if (xBallon + tailleBallon > tailleCadre || xBallon < 0) {
		sens *= -1;
	}
	ballon.style.left = (xBallon + vitesse * sens) + "px";
	rebondId = 	requestAnimationFrame(rebond); 
}

demarreElt.addEventListener("click", function () {
	arreterElt.disabled = false;
	demarreElt.disabled = true;
	requestAnimationFrame(rebond);
});

arreterElt.addEventListener("click", function () {
	arreterElt.disabled = true;
	demarreElt.disabled = false;
	cancelAnimationFrame(rebondId);
})