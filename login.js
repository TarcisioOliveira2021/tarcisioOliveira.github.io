function salve(){
  alert("Um salve pra todo mundo !");
}

function botaoEvento(){
  var senha = document.querySelector("#inputPassword");
  if(senha.lenght < 6){
     alert( " A senha precisa ter 6 caracteres ");
  } 
  alert("Botão clicado");
} 

