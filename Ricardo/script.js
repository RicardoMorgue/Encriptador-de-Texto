function btnEncriptado() {
    let mensajeingresado = document.getElementById("mensajeingresado");
    let mensajeencriptado = document.querySelector(".mensajeencriptado");

    let textoEncriptado = encriptar(mensajeingresado.value);
    mensajeencriptado.value = textoEncriptado;
    mensajeingresado.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada;

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptado() {
    let mensajeingresado = document.getElementById("mensajeingresado");
    let mensajeencriptado = document.querySelector(".mensajeencriptado");

    let textoEncriptado = desencriptar(mensajeingresado.value);
    mensajeencriptado.value = textoEncriptado;
    mensajeingresado.value = "";
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada;

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

function btnCopiar(){
    let copyText = document.getElementById("mensajeencriptado");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
}

function btnPegar(){
    let mensajeencriptado = document.querySelector(".mensajeencriptado");
    navigator.clipboard.readText().then(function(copyText){
        console.log(copyText);
        document.getElementById("mensajeingresado").value = copyText;
    });
    mensajeencriptado.value = "";
}