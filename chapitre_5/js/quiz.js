// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];



for (var i = 0; i < questions.length; i++) {
    let nouveauElt = document.createElement("div");
    let strongElt = document.createElement("strong");
    let bouton = document.createElement("button");
   
    strongElt.textContent = "Question " + (i + 1) + " : ";
    nouveauElt.appendChild(strongElt);
    nouveauElt.appendChild(document.createTextNode(questions[i].enonce));
   
    bouton.textContent = "Afficher la réponse";
    bouton.id = i;
   
    bouton.addEventListener("click", function (e) {
        let i = bouton.id;
        let change = document.createElement("div");
        change.textContent = questions[i].reponse;
        document.getElementById("contenu").replaceChild(change, e.target);
    })
   
    document.getElementById("contenu").appendChild(nouveauElt);
    document.getElementById("contenu").appendChild(bouton);
}
