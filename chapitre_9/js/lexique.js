let bodyElt = document.querySelector("body");
let alpha = ["A", "B", "C", "D", "E"];
let listeElt = document.createElement("div");
listeElt.id = "liste";
bodyElt.appendChild(listeElt);
let texteElt = document.getElementById("texte");

function fill(lettre) {
    
}

for (let i = 0; i < alpha.length; i++) {
    let lettreElt = document.createElement("a");
    lettreElt.href = "#";
    lettreElt.id = alpha[i];
    lettreElt.textContent = alpha[i];
    lettreElt.addEventListener("click", function (event) {
        ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + event.target.id, function (reponse) {
        let mots = JSON.parse(reponse);
        texteElt.innerHTML = "";
        mots.forEach(element => {
            let motElt = document.createElement("h1");
            motElt.textContent = element.term;
            texteElt.appendChild(motElt);
            let definitionElt = document.createElement("p");
            definitionElt.textContent = element.definition;
            texteElt.appendChild(definitionElt);
        });
    });
    });
    listeElt.appendChild(lettreElt);
};
