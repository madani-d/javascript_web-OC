function compterElements(target) {
	return document.querySelectorAll(target).length;
}
console.log(compterElements("p"));
console.log(compterElements(".adjectif"));
console.log(compterElements("p .adjectif"));
console.log(compterElements("p > .adjectif"));