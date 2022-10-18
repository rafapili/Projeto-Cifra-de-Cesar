let selecione = document.querySelector(".select");
let incremento = document.querySelectorAll(".incremento-container");
let btn = document.querySelector("button");
let radiobtn = document.querySelector(".radio-button");
let codificar = document.querySelector("#codificar");
let decodificar = document.querySelector("#decodificar");

let esconde_incremento = document.getElementById("esconde_incremento")

function Hidden() {
  if (selecione.value == "cifra") {
    esconde_incremento.style.display = "block"
  } else {
    esconde_incremento.style.display = "none";
  }
}

selecione.addEventListener('change', Hidden);

function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codificar.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

function cifraCesar() {
  let msg = document.querySelector("#mensagem").value;
  let incremento = parseInt(document.querySelector("#rangenumber").value);
  let saida = '';

  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        saida += String.fromCharCode((msg.charCodeAt(i) + incremento - 65) % 26 + 65); 
      } else {
        saida += String.fromCharCode((msg.charCodeAt(i) + incremento - 97) % 26 + 97);
      }
    }
    return saida;

  } else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  incremento + 26) % 26 + 97);
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - incremento + 26) % 26 + 65);
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}

radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "Codificar Mensagem!";
  } else if (decodificar.checked) {
    btn.innerHTML = "Decodificar Mensagem!";
  }
  console.log(selectCesar);
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } else if (selecione.value === "cifra") {
    resultado.innerText = cifraCesar();
  }
});