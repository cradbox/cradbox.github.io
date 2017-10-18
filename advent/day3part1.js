function uniquePath(input) {
	var sorted = input.sort();
	var count = 0;
	for (var i=0; i<sorted.length; i++) {
		if (sorted[i] != sorted[i+1]) {
			count++;
		}
	}
	return count;
}

function santaPath(input) {
	var locs = ["00"];
	var x = 0;
	var y = 0;
	var house = "";
	for (var i=0; i<input.length; i++) {
		if (input[i] == "<") {
			x--;
		} else if (input[i] == ">") {
			x++;
		} else if (input[i] == "v") {
			y--;
		} else if (input[i] == "^") {
			y++;
		}
		house = ("" + x + y);
		locs.push(house);
	}
	return uniquePath(locs);
}
