window.cipher = {
	encode: (offset, cadena)=> {
		let cadenaNew='';
		for(let i=0; i<cadena.length; i++) {
			let caracter= cadena.charCodeAt(i);
			let caracterNew = '';
			if (caracter>=32 && caracter<=64)
				caracterNew = caracter;
			else
				caracterNew=(caracter-65+offset)%26+65;	
			cadenaNew += String.fromCharCode(caracterNew);
		}
		return cadenaNew;
},	
	decode: (offset, cadena) => { 
	let cadenaNew= '';
		for(let i=0; i<cadena.length; i++) {
			let caracter= cadena.charCodeAt(i);
			let caracterNew = '';
			if (caracter>=32 && caracter<=64)
				caracterNew = caracter;
			else
				caracterNew=(caracter+65-offset)%26+65; 
			cadenaNew += String.fromCharCode(caracterNew);
		}
		return cadenaNew;
	}
}
