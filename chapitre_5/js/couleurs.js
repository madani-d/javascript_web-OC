let colorElt = document.getElementsByTagName("div");

function colorAll(target, color) {
	for (var i = 0; i < target.length; i++) {
		target[i].style.backgroundColor = color;
	}
}

function getColor(color) {
switch (color) {
		case "R":
			colorAll(colorElt, "red");
			break;
		case "J":
			colorAll(colorElt, "yellow");
			break;
		case "V":
			colorAll(colorElt, "green");
			break;
		case "B":
			colorAll(colorElt, "blue");
			break;
		default:
			console.log("touche invalide !");
			break;
	}
	console.log(color);
}

document.addEventListener("keypress", function (e) {
	getColor(String.fromCharCode(e.charCode).toUpperCase());	
});

