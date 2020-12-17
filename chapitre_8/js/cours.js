// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrome vers le fichier langages.txt publié localement

req.open("GET", "http://localhost/javascript-web-srv/data/langage.txt");
// Envoi de la requête
/*
req.send(null);
// Affiche la réponse reçue par la requête
console.log(req.responseText);
*/

/*
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", true);
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    console.log(req.responseText);
})
req.send(null);
*/

/*
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // le serveur a réussi a traiter la requête
        console.log(req.responseText);
    } else {
        // Affiche des informations sur l'échec du traitement de la requête
        console.log(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.log("Erreur réseau");
});

req.send(null);
*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès

function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    var films = JSON.parse(reponse);
    films.forEach(function (film) {
        console.log(film.titre);
    });
});

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    var films = JSON.parse(reponse);
    films.forEach(function (film) {
        console.log(film.realisateur);
    });
});

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    let tableau = reponse.split(";");
    for (let i = 0; i < tableau.length; i++) {
        let langue = document.createElement("li");
        langue.textContent = tableau[i];
        document.getElementById("langages").appendChild(langue);
    }
});
