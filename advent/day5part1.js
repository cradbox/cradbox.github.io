function niceStrings( input ) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const meanStrings = ['ab', 'cd', 'pq', 'xy'];
	let niceStrings = 0;

	function dupeCheck( input ) {
		for ( let i=0; i<input.length; i++ ) {
			let nnString = input[i];
			let nnString2 = input[i+1];
			if ( nnString != nnString2 ) {
				continue
			} else {
				return true;
			}
		}
		console.log( input + " has no duplicate characters." );
		return false;
	}

	function badStrings ( input ) {
		for ( let i=0; i<input.length; i++ ) {
			if ( meanStrings.indexOf( input[i] + input[i+1] ) == -1 ) {
				continue
			} else {
				console.log( input + " has a bad string." );
				return false;
			}
		}
		return true;
	}

	function vowelCount ( input ) {
		let vowelCount = 0;
		for ( let i=0; i<input.length; i++ ) {
		if ( vowels.indexOf( input[i] ) > -1 ) {
			vowelCount++;
			}
		}
		if ( vowelCount > 2 ) {
			return true;
		} else {
			console.log( input + " has less than 3 vowels." );
			return false;
		}
	}

	for ( let i=0; i<input.length; i++ ) {
		if ( dupeCheck( input[i] ) ) {
			if ( badStrings( input[i] ) ) {
				if ( vowelCount( input[i] ) ) {
					niceStrings++;
				}
			}
		}
	}
	return niceStrings;
}
