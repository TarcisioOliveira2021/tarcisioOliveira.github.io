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
  
function trocandoBackground(){
  var comSom = document.getElementById("c_som");  
  var semSom = document.getElementById("s_som"); 
  semSom.style.display = "block";
  comSom.addEventListener("click",function(){
   if(semSom.style.display == "block"){
     semSom.style.display = "none";
   }else{
     semSom.style.display = "block";
   }
   },false);
  } 
    

} 

