function santaBasement(input) {
    var floor = 0;
    for (var i=0; i<input.length; i++) {
        if (input[i] == '(') {
            floor++;
        } else if (input[i] == ')') {
            floor--;
			if (floor < 0) {
                return i;
            }
        }
    }
}
