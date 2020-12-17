let timeElt = document.getElementById("time");
function chronometre() {

		let compteur = new Number(timeElt.textContent);
		timeElt.textContent = compteur + 1;
	
}

let intervalId = null;

let stopElt = document.createElement("button");
stopElt.id = "stop";
stopElt.textContent = "Arrêter";
stopElt.addEventListener("click", function (e) {
	clearInterval(intervalId);
	document.querySelector("body").replaceChild(boutonElt, e.target);
});

let boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", function (e) {
	intervalId = setInterval(chronometre, 1000);

	document.querySelector("body").replaceChild(stopElt, e.target);	
});

