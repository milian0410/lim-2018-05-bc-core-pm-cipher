
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
    result.innerHTML = cipher.encode(parseInt(offset.value), text.value.toUpperCase());
});
console.log(result.value);

//llamar a la función con el botón descifrar//
botonDecode.addEventListener ("click", ()=> {
    result.innerHTML = cipher.decode(parseInt(offset.value), text.value.toUpperCase());
});
console.log(result.value);

//llamar a la función con el boton limpiar//
botonCleaner.addEventListener("click", ()=> {
    document.getElementById("message").value = "";
});
