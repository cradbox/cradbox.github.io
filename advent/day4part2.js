function adventCoin6 ( input ) {
	let found = false;
	let total = 0;
	while ( !found ) {
		let answer = input + total;
		let hash = md5(answer);
		if (hash.substr(0,6) == '000000') {
			return answer;
		} else {
			total++;
		}
	}
}

console.log( 'ckczppom' )
