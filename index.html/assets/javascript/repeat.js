//Zombie Hangman- 
var word= [“brains”, “undead”, “walker”, “corpse”, “creepy”, “terror”, “wicked”, “zombie”, “scared”, “scream”, “killer”, “putrid”];
var guess = prompt(“Enter a letter before the Zombies get you!”);
//Choose word at random and present to function as string for checking
var wordChoose = word[Math.floor(Math.random() * word.lentght)]; 

function checkGuess() {

if  String(wordChoose.charAt(0)= guess)			//*gotta be a way to loop through
	return “guess” at (0)
	
	else if String(wordChoose.charAt(1)===guess)
	return “guess” at (1)

	else if String(wordChoose.charAt(2)===guess)
	return “guess” at (2)

	else if String(wordChoose.charAt(3)===guess)
	return “guess” at (3)

	else if String(wordChoose.charAt(4)===guess)
	return “guess” at (4)

	else if String(wordChoose.charAt(5)===guess)
	return “guess” at (5)
