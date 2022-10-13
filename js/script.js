var checkBoxBase64 = document.getElementById("base64");
var checkBoxCifraDeCesar = document.getElementById("cfc");
var incrementar = document.getElementById('incrementar');
const alphabet = ['.','é','ú','ó','á','í','ã','ç','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var textNoCrypto = document.getElementById("textNoCrypto");
var textCrypto = document.getElementById("textCrypto");   

incrementar.value = 1;

function mostraIncremento() { 
    incrementar.style.display = "block"; 
  }
  
function escondeIncremento() {
    incrementar.style.display = "none";
  }

checkBoxCifraDeCesar.addEventListener('change', mostraIncremento);
checkBoxBase64.addEventListener('change', escondeIncremento);
incrementar.addEventListener('change', ()=>{
})

function Codificar() {
    
    
    var arryText = textNoCrypto.value.toLowerCase().split('') 
    const getLetter = arryText.map((letter)=>{
    const indexLetter = alphabet.indexOf(letter)
    const restartIndex = alphabet.indexOf('.');
    if(indexLetter != -1){
     var cryptoLetter = indexLetter + parseInt(incrementar.value)
      if(cryptoLetter >= alphabet.length){
          cryptoLetter = parseInt(restartIndex) + parseInt(incrementar.value)
          console.log(cryptoLetter);
      }  
    }
    return alphabet[cryptoLetter]
    })
   
    textCrypto.value = getLetter.join('')
}

function Decodificar(){
    
    var arryText = textNoCrypto.value.toLowerCase().split('') 
    const getLetter = arryText.map((letter)=>{
    const indexLetter = alphabet.indexOf(letter)
    const restartIndex = alphabet.indexOf('.');
    if(indexLetter != -1){
     var cryptoLetter = indexLetter - parseInt(incrementar.value)
      if(cryptoLetter >= alphabet.length){
          cryptoLetter = parseInt(restartIndex) - parseInt(incrementar.value)
          console.log(cryptoLetter);
      }  
    }
    return alphabet[cryptoLetter]
    })
   
    textCrypto.value = getLetter.join('')
}