let form = document.querySelector("form");
let succes = document.getElementById("valide");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function () {
        let message = document.createElement("p");
        message.textContent = "L'article a bien été ajouté";
        succes.appendChild(message);
    });
})