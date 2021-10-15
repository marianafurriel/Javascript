var animais = [
    "cachorro",
    "gato",
    "cavalo",
    "macaco",
    "papagaio",
    "peixe",
    "elefante",
    "girafa",
    "capivara",
    "zebra",
    "leão",
    "cobra",
    "rato",
    "javali"
]

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord(){
    answer = animais[Math.floor(Math.random() * animais.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter){
   guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
   document.getElementById(chosenLetter).setAttribute('disabled', true);
 
   if(answer.indexOf(chosenLetter) >= 0){
	   	guessedWord();
		checkIfGameWon();
   }
   else if(answer.indexOf(chosenLetter) === -1){
		mistakes++;
	   	updateMistakes();
	   	checkIfGameLost();
		updateHangmanPicture();
	}
}

function updateHangmanPicture(){
	document.getElementById('hangmanPic').src = "./img/" + mistakes +".jpg";
}

function checkIfGameWon(){
	if(wordStatus === answer){
		document.getElementById('keyboard').innerHTML = "Você ganhou!";
	}
}

function checkIfGameLost(){
	if(mistakes === maxWrong){
		document.getElementById("wordSpotlight").innerHTML = "A resposta era: " + answer;
		document.getElementById('keyboard').innerHTML = "Você perdeu!";
	}
}

function guessedWord(){
    wordStatus = answer.split('').map(letter=>(guessed.indexOf(letter) >= 0 ? letter : "_")).join('');
    document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes(){
	document.getElementById('mistakes').innerHTML = mistakes;
}

function reset(){
	mistakes = 0;
	guessed = [];
	document.getElementById('hangmanPic').src = "./img/0.jpg";

	randomWord();
	guessedWord();
	updateMistakes();
	generateButtons();
}

document.getElementById("maxWrong").innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();