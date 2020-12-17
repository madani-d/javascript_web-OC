let infoElt = document.getElementById("infoMdp");
infoElt.textContent = "";
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
	let mdp1 = form.elements.mdp1.value;
	let mdp2 = form.elements.mdp2.value;
	let regexMdp = /.*[0-9].*/;
	if (mdp1.length < 6) {
		infoElt.textContent = "Erreur : la longueur du mot de passe est de 6 caractères minimum";
	} else if (!regexMdp.test(mdp1)) {
		infoElt.textContent = "Erreur : le mot de passe doit contenir au moins un chiffre";
	}

	if (mdp1 !== mdp2) {
		infoElt.textContent = "Erreur : mots de passe non identiques !"
	}

	e.preventDefault();
})