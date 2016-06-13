
// Opções disponiveis para jogar // Available options for play
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;


// Recupera o click do jogar e chama sua respectiva função // Get the player's click and call his function
document.getElementById("1").onclick = function(){setId01();}
document.getElementById("2").onclick = function(){setId02();}
document.getElementById("3").onclick = function(){setId03();}
document.getElementById("4").onclick = function(){setId04();}
document.getElementById("5").onclick = function(){setId05();}
document.getElementById("6").onclick = function(){setId06();}
document.getElementById("7").onclick = function(){setId07();}
document.getElementById("8").onclick = function(){setId08();}
document.getElementById("9").onclick = function(){setId09();}

// Define a marca do jogador e do computador // Set the tag of the player and of the computer
var playSet;
var compSet;

// Verifica se o turno é do jogador ou da maquina // Verify if the turn is for the player or for the computer
var turn;

// Inicia o jogo // Start the game
$(document).ready(function(){

// Verifica qual é a marca do player // Verify which is the player's mark
var conf = confirm("X ou O");
if (conf == true){
	playSet = "X";
	compSet = "O";
	turn = 0;
	startGame();

} else {
	playSet = "O";
	compSet = "X";
	turn = 0;
	startGame();

}
});


function startGame(){

	// Coloca o compSet no centro da mesa // Puts the compSet on the center of the table
	$("#5").text(compSet).attr('class', compSet);
	t5 = compSet;
	turn = 1;
}


	// Executa as funções do jogador // Execute the functions of the player
function setId01(){
	if (turn == 1 && t1 == null){
		$("#1").text(playSet).attr('class', playSet);
		t1 = playSet;
		turn = 0;
		check();
		compAI();
	}
}
function setId02(){
	if (turn == 1 && t2 == null){
		$("#2").text(playSet).attr('class', playSet);
		t2 = playSet;
		turn = 0;
		check();
		compAI();
	}

}
function setId03(){
	if (turn == 1 && t3 == null){
		$("#3").text(playSet).attr('class', playSet);
		t3 = playSet;
		turn = 0;
		check();
		compAI();
	}

}
function setId04(){
	if (turn == 1 && t4 == null){
		$("#4").text(playSet).attr('class', playSet);
		t4 = playSet;
		turn = 0;
		check();
		compAI();
	}

}
function setId05(){
	if (turn == 1 && t5 == null){
		$("#5").text(playSet).attr('class', playSet);
		t5 = playSet;
		turn = 0;
		check();
		compAI();
	}

}
function setId06(){
	if (turn == 1 && t6 == null){
		$("#6").text(playSet).attr('class', playSet);
		t6 = playSet;
		turn = 0;
		check();
		compAI();
	}

}
function setId07(){
	if (turn == 1 && t7 == null){
		$("#7").text(playSet).attr('class', playSet);
		t7 = playSet;
		turn = 0;
		check();
		compAI();
	}
}
function setId08(){
	if (turn == 1 && t8 == null){
		$("#8").text(playSet).attr('class', playSet);
		t8 = playSet;
		turn = 0;
		check();
		compAI();
	}

}
function setId09(){
	if (turn == 1 && t9 == null){
		$("#9").text(playSet).attr('class', playSet);
		t9 = playSet;
		turn = 0;
		check();
		compAI();
	}

}


 // Chama os movimentos da IA // Call the IA moves
function compAI(){

	// Primeiros movimentos // First moves
	if (turn == 0 && t3 == null){
		$("#3").text(compSet).attr('class', compSet);
		t3 = compSet;
		turn = 1;
		check();

	} 
	else if (turn == 0 && t7 == null){
		$("#7").text(compSet).attr('class', compSet);
		t7 = compSet;
		turn = 1;
		check();
	}

	// Movimentos de defesa // Defensive moves
	else if (t1 == playSet && t3 == playSet && t2 == null){
		$("#2").text(compSet).attr('class', compSet);
		t2 = compSet;
		turn = 1;
		check();
	}
	else if (t3 == playSet && t9 == playSet && t6 == null){
		$("#6").text(compSet).attr('class', compSet);
		t6 = compSet;
		turn = 1;
		check();
	}
	else if (t4 == playSet && t7 == playSet && t1 == null){
		$("#1").text(compSet).attr('class', compSet);
		t1 = compSet;
		turn = 1;
		check();
	}
	else if (t7 == playSet && t8 == playSet && t9 == null){
		$("#9").text(compSet).attr('class', compSet);
		t9 = compSet;
		turn = 1;
		check();
	}
	else if (t7 == playSet && t9 == playSet && t8 == null){
		$("#8").text(compSet).attr('class', compSet);
		t8 = compSet;
		turn = 1;
		check();
	}
	else if (t3 == playSet && t9 == playSet && t2 == playSet && t4 == null){
		$("#4").text(compSet).attr('class', compSet);
		t4 = compSet;
		turn = 1;
		check();
	}
	else if (t3 == playSet && t9 == playSet && t1 == playSet && t4 == null){
		$("#4").text(compSet).attr('class', compSet);
		t4 = compSet;
		turn = 1;
		check();
	}
	else if (t2 == playSet && t3 == playSet && t1 == null){
		$("#1").text(compSet).attr('class', compSet);
		t1 = compSet;
		turn = 1;
		check();
	} 
	else if (t4 == playSet && t7 == playSet && t9 == playSet && t2 == null){
		$("#2").text(compSet).attr('class', compSet);
		t2 = compSet;
		turn = 1;
		check();
	}
	else if (t3 == playSet && t1 == playSet && t4 == playSet && t8 == null){
		$("#8").text(compSet).attr('class', compSet);
		t8 = compSet;
		turn = 1;
		check();
	}
	else if (t3 == playSet && t6 == playSet && t1 == playSet && t8 == null){
		$("#8").text(compSet).attr('class', compSet);
		t8 = compSet;
		turn = 1;
		check();
	}
	else if (t3 == playSet && t9 == playSet && t1 == playSet && t8 == null){
		$("#8").text(compSet).attr('class', compSet);
		t8 = compSet;
		turn = 1;
		check();
	}
	else if (t8 == playSet && t3 == playSet && t6 == null){
		$("#6").text(compSet).attr('class', compSet);
		t6 = compSet;
		turn = 1;
		check();
	}
	else if (t7 == playSet && t8 == playSet && t6 == playSet && t2 == playSet && t1 == null){
		$("#1").text(compSet).attr('class', compSet);
		t1 = compSet;
		turn = 1;
		check();
	}


	// Movimentos normais // Normal moves
	else if (turn == 0 && t4 == null){
		$("#4").text(compSet).attr('class', compSet);
		t4 = compSet;
		turn = 1;
		check();

	} 
	else if (turn == 0 && t9 == null){
		$("#9").text(compSet).attr('class', compSet);
		t9 = compSet;
		turn = 1;
		check();
	}
	else if (turn == 0 && t6 == null){
		$("#6").text(compSet).attr('class', compSet);
		t6 = compSet;
		turn = 1;
		check();
	}
	else if (turn == 0 && t8 == null){
		$("#8").text(compSet).attr('class', compSet);
		t8 = compSet;
		turn = 1;
		check();
	}
	else if (turn == 0 && t2 == null){
		$("#2").text(compSet).attr('class', compSet);
		t2 = compSet;
		turn = 1;
		check();
	}
}


// Verifica se há algum ganhador ou se houver empate // Check for any winner or if there's a tie
function check(){
	
	// Player Game Check
	// The Player never wins! :D

	// Com Game Check
	if (t3 == compSet && t5 == compSet && t7 == compSet){
		alert("Comp Wins!");
		reset();
	}
	else if (t4 == compSet && t5 == compSet && t6 == compSet){
		alert("Comp Wins!");
		reset();
	}
	else if (t2 == compSet && t5 == compSet && t8 == compSet){
		alert("Comp Wins!");
		reset();
	}
	else if (t1 == compSet && t5 == compSet && t9 == compSet){
		alert("Comp Wins!");
		reset();
	}
	else if (t1 == compSet && t2 == compSet && t3 == compSet){
		alert("Comp Wins!");
		reset();
	}

	// Draw Game Check
	else if ((t1 != null && t2 != null && t3 != null && t4 != null && t5 != null && t6 != null && t7 != null && t8 != null) || (t2 != null && t3 != null && t4 != null && t5 != null && t6 != null && t7 != null && t8 != null && t9 != null)){
		alert("Draw Game!");
		reset();
	}
}


// Reinicia o jogo // Restart the game
function reset(){

t1 = null;
t2 = null;
t3 = null;
t4 = null;
t5 = null;
t6 = null;
t7 = null; 
t8 = null; 
t9 = null;

$("#1").text('').attr('class', '');
$("#2").text('').attr('class', '');
$("#3").text('').attr('class', '');
$("#4").text('').attr('class', '');
$("#5").text('').attr('class', '');
$("#6").text('').attr('class', '');
$("#7").text('').attr('class', '');
$("#8").text('').attr('class', '');
$("#9").text('').attr('class', '');

startGame();

}

