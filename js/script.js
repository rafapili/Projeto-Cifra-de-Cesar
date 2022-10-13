let codificar = document.getElementById("codificar");
let decodificar = document.getElementById("decodificar");
let botao = document.getElementById("botao");
let cesar = document.getElementById("cesar");
let base64 = document.getElementById("base64");
let incremento = document.getElementById("incrementar");
let input = document.getElementById("mensagem");
let output = document.getElementById("resultado");
var cifra, acao;

/* Eventos */
cesar.addEventListener("click", (e) => {
    incremento.style.display = "block";
    document.getElementById('key').style.display = 'block';
    base64.checked = false;
    cifra = 'cezar';
    toggleRadio('cifradecesar');
    toggleRadio('base64');
});
base64.addEventListener("click", (e) => {
    incremento.style.display = "none";
    document.getElementById('key').style.display = 'none';
    cesar.checked = false;
    cifra = 'base64';
    toggleRadio('base64');
    toggleRadio('cifradecesar');
});

codificar.addEventListener("click", (e) => {
    botao.innerText = "Codificar";
    decodificar.checked = false;
    acao = 'codificar';
    toggleRadio('codificar');
    toggleRadio('decodificar');
});
decodificar.addEventListener("click", (e) => {
    botao.innerText = "Decodificar";
    codificar.checked = false;
    acao = 'decodificar';
    toggleRadio('decodificar');
    toggleRadio('codificar');
});

botao.addEventListener("click", (e) => {
    e.preventDefault();
    opcaoEscolhida();
});

window.addEventListener('load', (event) => {
    cifra = 'cezar';
    acao = 'codificar';

    cesar.checked = true;
    toggleRadio('cifradecesar');
    codificar.checked = true;
    toggleRadio('codificar');
});

/* Calculos */

function codeCesar(message, decode = true) {
    message = message.split("");
    message = message.map((valor) => convertChar(valor));
    message = message.map((valor) =>
        decode ? (typeof valor == 'number') ? valor - parseInt(incremento.value) : valor : (typeof valor == 'number') ? valor + parseInt(incremento.value) : valor
    );
    return message.map((valor) => (typeof valor == 'number') ? String.fromCharCode(valor) : valor).join("");
}

function convertChar(valor) {
    const cadeia = ['!', '?', '@', '_', ':', ';', '/', '%', '&', '(', ')', '=', ' '];
    if (cadeia.includes(valor)) {
        return valor;
    } else {
        return valor.charCodeAt();
    }
}

function opcaoEscolhida() {
    if (acao == 'codificar') {
        if (cifra == 'cezar') {
            //Codificar Cesar
            output.innerText = codeCesar(input.value, false);
        } else {
            //Codificar Base64
            output.innerText = btoa(input.value);
        }
    } else if (acao == 'decodificar') {
        if (cifra == 'cezar') {
            //Decodificar César
            output.innerText = codeCesar(input.value);
        } else {
            //Decodificar base64
            output.innerText = atob(input.value);
        }
    } else {
        output.innerText = "Informe o tipo de código ";
    }
}

function toggleRadio(id) {
    const radio = document.getElementById(id);
    const label = document.querySelector(`label[for=${id}]`);
    if (radio.checked) {
        label.classList.add('selected');
    } else {
        label.classList.remove('selected');
    }
}