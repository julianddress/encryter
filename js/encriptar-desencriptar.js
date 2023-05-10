let input1 = document.querySelector("#input-redactar");
input1.focus();

document.querySelector("#boton-copiar").style.display = 'none';

// FUNCTION - ENCRIPTAR TEXTO
const encriptarTexto = () =>{
    let cadena = input1.value;

    // SI CADENA ES NULA, INDENIFINIDA O VACIA
    if(!cadena){
        alert(`NO HA INGRESADO NINGUN TEXTO A ENCRIPTAR`);
        input1.focus();
    }else{
        document.getElementById("logo-muneco").style.visibility = "hidden";
        document.getElementById("mensaje-notfound").style.visibility = "hidden";
        document.getElementById("input-leer").style.visibility = "visible";
        document.getElementById("boton-copiar").style.visibility = "visible";
    }

    let restriccion = false;
    for (let letra of cadena) {
    // EXPRESIONES REGULARES
        if (/[AEIOUáéíóú*<>@+-.°]/.test(letra)) {
            restriccion = true;
        }     
    }

    if(restriccion === true) {
        alert(`NO PUEDE INGRESAR VOCALES EN MAYUSCULA O CARACTERES ESPECIALES`);
        input1.value = "";
    }
                
    input1.focus();

    // ENCRIPTAR TEXTO
    const reemplazar = {
        "a": "ai", 
        "e": "enter", 
        "i": "imes", 
        "o": "ober", 
        "u": "ufat"
    }

    const newcadena = cadena.replace(
    new RegExp(Object.keys(reemplazar).join("|"), "g"),
    matched => reemplazar[matched]
    )

    if(cadena === ""){
        console.log("no ingresó ningun texto");
    }else{
        document.querySelector("#boton-copiar").style.display = 'flex';
    }
    const textonoencriptado  = document.querySelector("#input-leer")
    textonoencriptado.value = newcadena;
    input1.value = "";
}

// -----------------------------------------------------------------------------------------            

// FUNCTION - DESENCRIPTAR TEXTO
const desencriptarTexto = () =>{
    let cadena = input1.value;

    if(!cadena){
        alert(`NO HA INGRESADO NINGUN TEXTO PARA DESENCRIPTAR`);
        input1.focus();
    }

    let restriccion = false;
    for (let letra of cadena) {
        // EXPRESIONES REGULARES
        if (/[AEIOUáéíóú*<>@+-.°]/.test(letra)) {
            restriccion = true;
        }     
    }

    if(restriccion === true) {
        alert(`NO PUEDE INGRESAR VOCALES EN MAYUSCULA O CARACTERES ESPECIALES`);
        input1.value = "";
    }
                
    input1.focus();

    // DESENCRIPTAR TEXTO
    const reemplazar = {
        "ai": "a", 
        "enter": "e", 
        "imes": "i", 
        "ober": "o", 
        "ufat": "u"
    }

    const cadenaoriginal = cadena.replace(
        new RegExp(Object.keys(reemplazar).join("|"), "g"),
        matched => reemplazar[matched]
    )

    const textencriptado  = document.querySelector("#input-leer")
    textencriptado.value = cadenaoriginal;
    input1.value = "";
}

// -----------------------------------------------------------------------------------------            

// FUNCTION - COPY TEXT
const copiarTexto = () => {
    // Seleccionar el segundo elemento de texto con id "area2"
    let copiar = document.querySelector("#input-leer"); 
    copiar.select();
    document.execCommand("copy");
}

let desencriptar = document.querySelector("#boton-desencriptar");
desencriptar.onclick = desencriptarTexto;

let opcionCopiar = document.querySelector("#boton-copiar");
opcionCopiar.onclick = copiarTexto;

let encriptar = document.querySelector("#boton-encriptar");
encriptar.onclick = encriptarTexto;