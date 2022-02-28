document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("numero").value != ""){
    alert ("Prontinho! Você receberá as novidades por email.")
    }else{
    alert ("Por favor, forneça os dados de nome e email!")
    }
}