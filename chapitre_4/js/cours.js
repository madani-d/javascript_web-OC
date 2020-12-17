var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

var paragraphesElt = document.getElementsByTagName("p");
console.log(paragraphesElt[0].style.color);
console.log(paragraphesElt[1].style.color);
console.log(paragraphesElt[2].style.color);

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);