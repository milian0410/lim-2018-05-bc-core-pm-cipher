
//variable del texto//
let text = document.getElementById("message");
//variable del desplazamiento//
let offset = document.getElementById("offset");
//variable del boton cifrar//
const botonEncode = document.getElementById("encode");
//variable del boton para descifrar//
const botonDecode = document.getElementById("decode");
//variable del resultado//
const result = document.getElementById("answer");
//variable del boton limpiar//
const botonCleaner = document.getElementById("clean");

//llamar a la función con el botón cifrar//
botonEncode.addEventListener ("click", ()=> {
    result.innerHTML = cipher.encode(parseInt(offset.value), text.value);
});
console.log(result.value);

/*
//llamar a la función con el botón descifrar//
botonDecode.addEventListener ("click", ()=> {
    result.value = cipher.decode(parseInt(offset.value), text.value);
});
console.log(result.value);*/

//llamar a la función con el boton limpiar//
function myFunction() {
    document.getElementById("message").innerHTML = "";
}

//botonEncode.addEventListener ("click", clickBotonEncode);//
/*
function clickBotonEncode() {
    let cadenaNew="";
    for(let i=0; i<cadena.length; i++) {
        let caracter= cadena.charCodeAt(i);
        let caracterNew=(caracter-65+offset)%26+65;
    cadenaNew += String.fromCharCode(caracterNew);
    }
document.getElementById("answer").innerHTML = cadenaNew.value;
}
*/
/*
let cadenaNew ='';

      for(let i=0; i<cadena.length; i++) {
        let caracter= cadena.charCodeAt(i);
        let caracterNew=(caracter-65+1)%26+65;
         cadenaNew = cadenaNew + String.fromCharCode(caracterNew);*/