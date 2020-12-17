let listeElt = document.getElementById("desserts");

document.querySelector("button").addEventListener("click", function () {
	var entre = prompt("ajouter le nom du nouveau dessert");
	let dessert = document.createElement("li");
	dessert.textContent = entre;
	dessert.addEventListener("click", function (e) {
		var nouveau = prompt("modifiez le nom du dessert :");
		e.target.textContent = nouveau;
	})
	listeElt.appendChild(dessert);
});

