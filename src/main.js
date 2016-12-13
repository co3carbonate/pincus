// Unleash the pincus! {:'-D
// main (on init)
function main() {
	repeat();
}
main();

// repeat the pincus process
function repeat() {
	var operation = random_int(1, 3);
	(operations[operation])();
}

// callback
// (executed after each operation's animation)
function callback() {
	setTimeout(repeat, random_int(0, 500));
}