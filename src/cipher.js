window.cipher = {
encode : function(cadena) {
    let cadenaNew;
    const valor = 33;
    for(let i=0; i<cadena.length; i++) {
        let caracter= cadena.chartCodeAt(i);
        let caracterNew=((caracter-65+valor)%26)+65;
    cadenaNew += String.fromCharCode(caracterNew);
    console.log(cadenaNew);
    return cadenaNew;
    }
}
}