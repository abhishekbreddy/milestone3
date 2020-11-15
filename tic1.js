$(document).ready(function () { // preventing jQuery code from running before the document is finished loading (is ready)

	var move = 1;
	var play = true;

	$("#board tr td").click(function () {                          // the board is being present with table row and cell
		if ($(this).text() == "" && play) {                   //checking the text present in the cell is null(empty) or not & is able to play
			if ((move % 2) == 1) {                       //checking for the move 
				$(this).append("X");                //inserting x in the cell 
				$(this).css('color', "#61892f");    // giving color for the x
				
			} else {
				$(this).append("O");             //inserting O in the cell if the condition fails   
				$(this).css('color', "#e85a4f");// giving color to o
			}
			move++;                                 // incrementing the move
			if (checkForWinner() != -1 && checkForWinner() != "") { // checking the condition for winner is not equal in a cell and is empty
				if (checkForWinner() == "X") {       //checking the winner for x or o
					$('body').append('<div class="winner"><span>Winner</span>X</div><button onclick="location.reload();" id="reload">Play Again</button>');
					$('.winner').css('background-color', '#61892f');
					$('#reload').css('color','#61892f');
				} else {
					$('body').append('<div class="winner"><span>Winner</span>O</div><button onclick="location.reload();" id="reload">Play Again</button>');
					$('.winner').css('background-color', '#e85a4f');
					$('#reload').css('color','#e85a4f');
				}
				play = false;
			}
		}
	});

	function checkForWinner() { // fn for  checking the winner and for each space(cell present in table) we are assigning a var 
		var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
		// check rows
		if ((space1 == space2) && (space2 == space3)) {
			return space3;
		} else if ((space4 == space5) && (space5 == space6)) {
			return space6;
		} else if ((space7 == space8) && (space8 == space9)) {
			return space9;
		}
		// check columns
		else if ((space1 == space4) && (space4 == space7)) {
			return space7;
		} else if ((space2 == space5) && (space5 == space8)) {
			return space8;
		} else if ((space3 == space6) && (space6 == space9)) {
			return space9;
		}
		// check diagonals
		else if ((space1 == space5) && (space5 == space9)) {
			return space9;
		} else if ((space3 == space5) && (space5 == space7)) {
			return space7;
		}
		//checking for draw
		else if (space1 && space2 && space3 && space4 &&  space5 && space6 && space7 && space8 && space9){
			$('body').append('<div class="winner"><span>Draw</span></div><button onclick="location.reload();" id="reload">Play Again</button>');
		}
		// no winner
		return -1;
	}})