// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
document.getElementById("contenu").appendChild(document.createElement("dl"));
let dlElt = document.querySelector("#contenu dl");

for (var i = 0; i < mots.length; i++) {
    dlElt.insertAdjacentHTML("beforeend", "<dt><strong>" + mots[i].terme + "</strong></dt>");
    dlElt.insertAdjacentHTML("beforeend", "<dd>" + mots[i].definition + "</dd>");
}