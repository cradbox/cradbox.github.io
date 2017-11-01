function adventCoin ( input ) {
	let found = false;
	let total = 0;
	while ( !found ) {
		let answer = input + total;
		let hash = md5(answer);
		if (hash.substr(0,5) == '00000') {
			return answer;
		} else {
			total++;
		}
	}
}

console.log( 'ckczppom' );
