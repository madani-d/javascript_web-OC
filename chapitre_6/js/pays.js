// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];


/*for (let i = 0; i < listePays.length; i++) {
    let test = document.createElement("option");
    test.textContent = listePays[i];
    test.setAttribute("class", "suggestion");
}*/
/*
document.querySelector("input").addEventListener("input", function (e) {
    for (let i = 0; i < listePays.length; i++) {
        let pays = listePays[i];
        console.log(pays[0]);
       
        if (listePays[i].indexOf(e.target.value, 1)) {
             let test = document.createElement("option");
            test.textContent = listePays[i];
            test.setAttribute("class", "suggestion");
            document.getElementById("suggestions").appendChild(test);
            console.log("test");
        }
    }  
});*/
let remove = function() {
    let element = document.getElementById("suggestions");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
    }
}


document.querySelector("input").addEventListener("input", function (e) {
    for (let p = 0; p < e.target.value.length; p++) {
        remove();
        for (let i = 0; i < listePays.length; i++) {
            if (listePays[i][p] === e.target.value[p] && listePays[i].indexOf(e.target.value) !== -1) {
                let test = document.createElement("option");
                test.textContent = listePays[i];
                test.setAttribute("class", "suggestion");
                test.addEventListener("click", function (e) {
                    remove();
                    document.querySelector("input").value = e.target.value;
                    console.log(e.target.value);
                })
                document.getElementById("suggestions").appendChild(test);   
            }
        }
    }
});

