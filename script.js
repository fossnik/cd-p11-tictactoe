var human = "X";
var computer = "O";

function flipBox(box) {
	if (document.getElementById(box).innerHTML.length === 0) {
		document.getElementById(box).innerHTML = human;
		document.getElementById(box).style.backgroundColor = '#ff8080';
		goAI();
	}
}

function goAI() {
	var box = Math.floor((Math.random() * 9) + 1);
	if (document.getElementById(box).innerHTML.length === 0) {
		document.getElementById(box).innerHTML = computer;
		document.getElementById(box).style.backgroundColor = '#8080ff';
	} else {
		goAI();
	}
}
