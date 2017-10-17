function elfPaper(input) {
	var dimensions = input;
	var total = 0;
	while (dimensions.length > 0) {
		var count = 0;
		var dim = dimensions.pop();
		var x = parseInt(dim.split("x")[0]);
		var y = parseInt(dim.split("x")[1]);
		var z = parseInt(dim.split("x")[2]);
		var side1 = (x*y);
		var side2 = (x*z);
		var side3 = (y*z);
		count = (2*side1)+(2*side2)+(2*side3)+Math.min(side1, side2, side3);
		total += count;
	}
	return total;
}
