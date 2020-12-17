let boutonElt = document.getElementById("bouton");
let contenuElt = document.getElementById("contenu");
let users = "";
document.getElementById("user").addEventListener("input", function (event) {
    users = event.target.value;
    return users;
});

boutonElt.addEventListener("click", function () {
    ajaxGet("https://api.github.com/users/" + users, function (reponse) {
        let user = JSON.parse(reponse);
        let avatarElt = document.createElement("img");
        avatarElt.src = user.avatar_url;
        avatarElt.style.width = "100px";
        avatarElt.style.height = "100px";
        contenuElt.appendChild(avatarElt);
        let nomElt = document.createElement("p");
        nomElt.textContent = user.name;
        contenuElt.appendChild(nomElt);
        let companyElt = document.createElement("p");
        companyElt.textContent = user.company;
        contenuElt.appendChild(companyElt);
        let siteElt = document.createElement("a");
        siteElt.textContent = user.blog;
        siteElt.href = user.blog;
        contenuElt.appendChild(siteElt);
    })
    console.log(users);
})