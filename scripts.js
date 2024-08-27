document.addEventListener("DOMContentLoaded", function () {

    /* Definición de variables a usar */
    const resultadoArea = document.getElementsByClassName("resultados_area")[0];
    const noResultadoArea = document.getElementsByClassName("no_resultados_area")[0];
    const entrada = document.getElementById("texto_entrada");
    /* Definición de botones de acción */
    const btnEncriptar = document.getElementById("btn_encriptar");
    const btnDesencriptar = document.getElementById("btn_desencriptar");
    const btnCopiar = document.getElementById("btn_copiar");
    /* Campo de resultado */
    const resultado = document.getElementById("resultado");

    /* Definicion de funciones a usar */
    function encriptar(texto) {
        /* Encriptado de las letras */
        const textoEncriptado = texto.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado

    }
    function desencriptar(texto) {
        /* Desencriptado de las letras */
        const textDesencriptado = texto.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textDesencriptado
    }
    function copiar() { 
        const textoCopiado = resultado.textContent;
        navigator.clipboard.writeText(textoCopiado).then(function() {
            alert("Texto copiado al portapapeles");
        })
    }

    /* Acciones de los botones */
    /* Accion Encriptar */
    btnEncriptar.addEventListener("click", function() {
        const texto = entrada.value;
        const textoEncriptado =  encriptar(texto);
        resultado.textContent = textoEncriptado;
        if(resultado.textContent != ""){
            resultadoArea.style.display = "block";
            noResultadoArea.style.display = "none";
        }else{
            resultadoArea.style.display = "none";
            noResultadoArea.style.display = "block";
        }
        console.log(resultado.textContent);
    });
    /* Accion Desencriptar */
    btnDesencriptar.addEventListener("click", function() {
        const texto = entrada.value;
        const textoEncriptado =  desencriptar(texto);
        resultado.textContent = textoEncriptado;
        if(resultado.textContent != ""){
            resultadoArea.style.display = "block";
            noResultadoArea.style.display = "none";
        }else{
            resultadoArea.style.display = "none";
            noResultadoArea.style.display = "block";
        }
        console.log(resultado.textContent);
    });
    /* Acción de Copiar */
    btnCopiar.addEventListener("click", function() {
        copiar();
    });
});