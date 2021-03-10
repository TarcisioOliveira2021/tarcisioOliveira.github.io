function salve(){
  alert('Um salve pra todo mundo !');
}

function botaoEvento(){
  var senha = document.querySelector("#inputPassword");
  var form = document.querySelector("#formulario");
  alert('Botão clicado');
  
  if(senha.value.length < 6){
     alert(' A senha precisa ter 6 caracteres ');
  }else{
     form.submit()
  }
  
} 

