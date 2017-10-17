function elfRibbon(input) {
	var dimensions = input;
	var total = 0;
	while (dimensions.length > 0) {
		var count = 0;
		var dim = dimensions.pop();
		var x = parseInt(dim.split("x")[0]);
		var y = parseInt(dim.split("x")[1]);
		var z = parseInt(dim.split("x")[2]);
		var volume = x*y*z;
		var sides = [x, y, z]
		sides.sort(function(a, b) {return a-b});
		sides.pop();
		var shortest = 2*sides[0] + 2*sides[1];
		count = volume + shortest;
		total += count;
	}
	return total;
}
