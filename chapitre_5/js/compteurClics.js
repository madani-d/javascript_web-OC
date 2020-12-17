let compteurElt = document.getElementById("compteurClics");
let total = 0;
let stop = 0;
let bouton = document.getElementById("clic");
bouton.addEventListener("click", function (e) {
	if (stop !== 0) {
		e.preventDefault;
	} else {
		total++;
		compteurElt.innerHTML = total;
	}
});

document.getElementById("desactiver").addEventListener("click", function () {
	stop++;
});