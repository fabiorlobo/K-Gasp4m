function generatePassword( length ) {
	var allcaps = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
	var lowercase = 'abcdefghijkmnopqrstuvwxyz';
	var numbers = '23456789';

	if ( document.getElementById( 'removeSpecial' ).checked ) {
		var special = allcaps + lowercase + numbers;
	} else {
		var special = '!?@#$%&*()-_+=<>[]{}';
	}

	var chars = [ allcaps, lowercase, numbers, special ];

	var password = '';
	var passwordArray = Array( length );

	for ( i = 0; i < length; i++ ) {
		var initialPassword = chars[ Math.floor( Math.random() * chars.length ) ];

		var randomize = initialPassword.charAt( Math.floor( Math.random() * initialPassword.length ) );

		password += randomize;
		passwordArray.push( randomize );
	}

	function validatePassword() {
		var missingCharArray = [];
		var charsOk = true;

		chars.forEach( function ( e, i, a ) {
			var hasChar = false;

			passwordArray.forEach( function ( e1, i1, a1 ) {
				if ( e.indexOf( e1 ) > -1 ) {
					hasChar = true;
				}
			});

			if ( !hasChar ) {
				missingCharArray = a;
				charsOk = false;
			}
		});

		if ( !charsOk ) {
			passwordArray [Math.floor( Math.random() * passwordArray.length) ] = missingCharArray.charAt( Math.floor( Math.random() * missingCharArray.length ) );
			password = '';

			passwordArray.forEach( function ( e, i, a ) {
					password += e;
			} );

			validatePassword();
		}
	}
	
	validatePassword();

	return password;
}

function printPassword() {
	mypassword.finalpassword.value = generatePassword(mypassword.length.value);
	document.getElementById( 'password' ).select();
}