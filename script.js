var human = "X";
var computer = "O";
var exigents =	[
								[1, 2, 3],
								[4, 5, 6],
								[7, 8, 9],
								[1, 4, 7],
								[2, 5, 8],
								[3, 6, 9],
								[1, 5, 9],
								[7, 5, 3]
								];
var emptyBoxes = [1,2,3,4,5,6,7,8,9];

function testFlip(box) {
	var randomBox = emptyBoxes[Math.floor(Math.random()*emptyBoxes.length)];
	// remove chosen box from emptyBoxes
	emptyBoxes.splice(emptyBoxes.indexOf(randomBox),1);
}


function tap(box) {
	testFlip(box);
	// manFlip(box);
}

function manFlip(box) {
	if (document.getElementById(box).innerHTML.length === 0) {
		document.getElementById(box).innerHTML = human;
		document.getElementById(box).style.backgroundColor = '#ff8080';
		machineFlip();
	}
}

function machineFlip() {
	testGame();
	var box = Math.floor((Math.random() * 9) + 1);
	if (document.getElementById(box).innerHTML === "") {
		document.getElementById(box).innerHTML = computer;
		document.getElementById(box).style.backgroundColor = '#8080ff';
	} else {
		machineFlip();
	}
}

function testGame() {
	var winner = human; // "X"
	var success = true;
	// loops through array containing 8 arrays of 3-box win combos
	exigents.forEach(function(threeBoxes) {
		// for each inner array loops through 3 boxes to test if they agree
		threeBoxes.forEach(function(box) {
			if (document.getElementById(box).innerHTML !== winner) {
				success = false;
			}
		});
	});
	console.log(success);
}
