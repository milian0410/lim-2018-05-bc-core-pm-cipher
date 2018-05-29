
let cadena = document.getElementById("message").value;
let offSet = document.getElementById("offset").value;
const botonEncode = document.getElementById("encode");
botonEncode.addEventListener ("click", clickBotonEncode);
let result = document.getElementById("answer");


function clickBotonEncode() {
    let cadenaNew="";
    for(let i=0; i<cadena.length; i++) {
        let caracter= cadena.charCodeAt(i);
        let caracterNew=(caracter-65+offset)%26+65;
    cadenaNew += String.fromCharCode(caracterNew);
    }
document.getElementById("answer").innerHTML = cadenaNew.value;
}

/*
let cadenaNew ='';

      for(let i=0; i<cadena.length; i++) {
        let caracter= cadena.charCodeAt(i);
        let caracterNew=(caracter-65+1)%26+65;
         cadenaNew = cadenaNew + String.fromCharCode(caracterNew);*/