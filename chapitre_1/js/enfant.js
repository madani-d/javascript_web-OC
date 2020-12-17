function afficheEnfant(noeud, indice) {
	if (noeud.nodeType === document.ELEMENT_NODE) {
		if (indice < noeud.childNodes.length && indice >= 0) {
		
		console.log(noeud.childNodes[indice]);
		} else {
			console.error("Indice incorrect");
		}
	} else {
		console.error("Type de noeud incorrect")
	}
}

afficheEnfant(document.body, 1);

afficheEnfant(document.body, -1);

afficheEnfant(document.body, 8);

afficheEnfant(document.body.childNodes[0], 0);