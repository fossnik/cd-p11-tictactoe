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

function tap(box) {
	manFlip(box);
}

function manFlip(box) {
	if (document.getElementById(box).innerHTML === "") {
		emptyBoxes.splice(emptyBoxes.indexOf(box),1);
		document.getElementById(box).innerHTML = human;
		document.getElementById(box).style.backgroundColor = '#ff8080';
		testGame(human);
		machineFlip();
	}
}

function machineFlip() {
	if (emptyBoxes.length > 0) {
		var randomBox = emptyBoxes[Math.floor(Math.random()*emptyBoxes.length)];
		emptyBoxes.splice(emptyBoxes.indexOf(randomBox),1);
		document.getElementById(randomBox).innerHTML = computer;
		document.getElementById(randomBox).style.backgroundColor = '#8080ff';
	}
	testGame(computer);
}

function testGame(player) {
	// loops through array containing 8 arrays of 3-box win combos
	exigents.forEach(function(consecutiveBoxes) {
		// for each inner array loops through 3 boxes to test if they agree
		var success = true;
		consecutiveBoxes.forEach(function(box) {
			if (document.getElementById(box).innerHTML !== player) {
				success = false;
			}
		});
		if (success) {
			var winHTML = player + " WINS!";
			winHTML += "<br><div><button class='btn btn-success'";
			winHTML += "onclick='window.location.reload()'>New Game</button></div>";
			document.getElementById("tictactoe").innerHTML = winHTML;
		}
	});
}
