var texto = document.getElementById("textarea");
var imagem = document.getElementById("img-Animacao");
var mensagens = document.getElementById('msgs');
var campoDeCriptografia = document.getElementById('campoDeCriptografia');
const coluna1 = document.getElementById('col-1');


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

    //retira esses campos da tag col-1
    coluna1.style.display = 'initial'; 
    coluna1.style.flexDirection = 'initial';
    coluna1.style.justifyContent = 'initial';
    coluna1.style.alignItems = 'initial';

    imagem.style.display = 'none'; // retira a imagem

    mensagens.style.display = 'none'; // retira as mensagens abaixo da imagem

    campoDeCriptografia.style.display = 'block'; // Mostra o campo de texto criptografado

    campoDeCriptografia.innerHTML = saida; // Define o valor do campo criptografado

    texto.value = ""; // tira o texto já escrito 

    texto.focus(); //foca no campo de escrever texto novamente 
}

function descriptografar() {
    var entrada = texto.value;
    var saida = "";

    if (entrada == "") {
        return false;
    }

    for (var i = 0; i < entrada.length; i++) {
        if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
            if (entrada[i] == 'a' && i < entrada.length - 1) {
                saida += 'a';
                if (entrada[i + 1] == "i") {
                    i++;
                }
            } else if (entrada[i] == 'e' && i < entrada.length - 4) {
                saida += 'e';
                if (entrada[i + 1] == "n" && entrada[i + 2] == "t" && entrada[i + 3] == "e" && entrada[i + 4] == "r") {
                    i += 4;
                }
            } else if (entrada[i] == 'i' && i < entrada.length - 3) {
                saida += 'i';
                if (entrada[i + 1] == "m" && entrada[i + 2] == "e" && entrada[i + 3] == "s") {
                    i += 3;
                }
            } else if (entrada[i] == 'o' && i < entrada.length - 3) {
                saida += 'o';
                if (entrada[i + 1] == "b" && entrada[i + 2] == "e" && entrada[i + 3] == "r") {
                    i += 3;
                }
            } else if (entrada[i] == 'u' && i < entrada.length - 3) {
                saida += 'u';
                if (entrada[i + 1] == "f" && entrada[i + 2] == "a" && entrada[i + 3] == "t") {
                    i += 3;
                }
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

    campoDeCriptografia.style.display = 'block'; 

    campoDeCriptografia.innerHTML = saida; 

    texto.value = "";

    texto.focus();
}




