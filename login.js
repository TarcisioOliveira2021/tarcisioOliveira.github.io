function salve(){
  alert('Um salve pra todo mundo !');
}

function botaoEvento(){
  var senha = document.querySelector("#inputPassword");
  if(senha.value.lenght < 6){
     alert(' A senha precisa ter 6 caracteres ');
  } 
  alert('Botão clicado');
} 

