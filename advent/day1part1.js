function santa(input) {
    var floor = 0;
    for (var i=0; i<input.length; i++) {
        if (input[i] == '(') {
            floor++;
        } else if (input[i] == ')') {
            floor--;
        }
    }
    return floor;
}
