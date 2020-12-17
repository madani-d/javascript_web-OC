var titreElts = document.getElementsByTagName("h2");
console.log(titreElts[0]);
console.log(titreElts.length);


var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
	console.log(merveillesElts[i]);
}

console.log(document.getElementById("nouvelles"));

console.log(document.getElementById("contenu").textContent);