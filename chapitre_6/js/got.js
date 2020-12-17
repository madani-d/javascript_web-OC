var maisons = [
	{
		code: "ST",
		nom: "Stark"
	},
	{
		code: "LA",
		nom: "Lannister"
	},
	{
		code: "BA",
		nom: "Baratheon"
	},
	{
		code: "TA",
		nom: "Targaryen"
	}
];

function getPersonnages(codeMaison) {
	switch (codeMaison) {
		case "ST":
			return ["Eddard", "Catelyn", "Sansa", "Arya", "Jon Snown"];
		case "LA":
			return ["Tywin", "Cersei", "Jaime", "Tyrion"];
		case "BA":
			return ["Robert", "Stannis", "Renly"];
		case "TA":
			return ["Aerys", "Daenerys", "Viserys"];
		default:
			return[];
	}
}

for (let i = 0; i < maisons.length; i++) {
	let maisonElt = document.createElement("option");
	maisonElt.textContent = maisons[i].nom;
	maisonElt.value = maisons[i].code;
	document.getElementById("maison").appendChild(maisonElt);
}

document.getElementById("maison").addEventListener("change", function (e) {
	let famille = getPersonnages(e.target.value);
	console.log(e.target.value);
	document.getElementById("persos").textContent = "";
	for (let i = 0; i < famille.length; i++) {
		let personnage = document.createElement("li");
		personnage.textContent = famille[i];
		document.getElementById("persos").appendChild(personnage);
	}
});

console.log(getPersonnages("BA")[0]);