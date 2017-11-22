function niceStrings( input ) {
	let niceStrings = 0;

	function tripCheck( input ) {
		let tripCheck = '';

		for ( let i=0; i<input.length; i++ ) {
			tripCheck = input[i];
			if ( tripCheck === input[i+1] && tripCheck === input[i+2] ) {
				return true;
			}
		}
		return false;
	}

	function pairCheck( input ) {
		let pairs = [];
		let pairCount = 0;
		let pair = '';

		for ( let i=0; i<input.length; i++ ) {
			pair = input[i] + input[i+1];
			if ( pairs.indexOf(pair) == -1 ) {
				pairs.push( pair );
			} else if ( pairs.indexOf(pair) > -1 ) {
				pairCount++;
			}
		}
		return pairCount;
	}

	function repeatCheck( input ) {
		let nnString = '';
		let nnString2 = '';

		for ( let i=0; i<input.length; i++ ) {
			nnString = input[i];
			nnString2 = input[i+2];
			if ( nnString != nnString2 ) {
				continue;
			} else {
				return true;
			}
		}
		console.log( input + " has no repeated characters." );
		return false;
	}

    let pairFlag = 0;

	for ( let i=0; i<input.length; i++ ) {
		pairFlag = pairCheck( input[i] );

		if ( pairFlag === 1 ) {
			if ( !tripCheck( input[i] ) ) {
				if ( repeatCheck( input[i] ) ) {
					niceStrings++;
				}
			}
		} else if ( pairFlag > 1 ) {
			if ( repeatCheck( input[i] ) ) {
				niceStrings++;
			}
		}
	}
	return niceStrings;
}
