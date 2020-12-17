let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
   var temoignage = {
       pseudo: e.target.elements.pseudo.value,
       evaluation: e.target.elements.evaluation.value,
       message: e.target.elements.message.value
   };
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function () {
        let valide = document.createElement("p");
        valide.textContent = "Le témoignage a bien été envoyé !! ;)";
        document.getElementById("valide").appendChild(valide);
    },
    true);
    e.preventDefault();
})