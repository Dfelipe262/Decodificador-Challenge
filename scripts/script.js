var texto = document.getElementById("textarea");
var imagem = document.getElementById("img-Animacao");
var mensagens = document.getElementById('msgs');
var campoDeCriptografia = document.getElementById('campoDeCriptografia');
const coluna1 = document.getElementById('col-1')


function criptografar() {
    var entrada = texto.value;
    var saida = "";

    if (entrada == "") {
        return false;
    }

    for (var i = 0; i < entrada.length; i++) {
        if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
            if (entrada[i] == 'a') {
                saida += 'ai';
            } else if (entrada[i] == 'e') {
                saida += 'enter';
            } else if (entrada[i] == 'i') {
                saida += 'imes';
            } else if (entrada[i] == 'o') {
                saida += 'ober';
            } else if (entrada[i] == 'u') {
                saida += 'ufat';
            } else {
                saida += entrada[i];
            }
        } else {
            alert("Não é permitido letras maiúsculas ou caracteres especiais!");
            return;
        }
    }

    coluna1.style.display = 'initial'; 
    coluna1.style.flexDirection = 'initial';
    coluna1.style.justifyContent = 'initial';
    coluna1.style.alignItems = 'initial';

    imagem.style.display = 'none';

    mensagens.style.display = 'none';

    campoDeCriptografia.style.display = 'block'; // Mostra o campo de texto criptografado

    campoDeCriptografia.innerHTML = saida; // Define o valor do campo criptografado

    texto.value = "";
    texto.focus();
}




