var h = document.head;
console.log(h);

var b = document.body;
console.log(b);
if (document.body.nodeType === document.ELEMENY_NODE) {
	console.log("Body est un noeud élément");
} else {
	console.log("Body est un noeud textuel");
}
for (var i = 0; i < document.body.childNodes.length; i++) {
console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode);