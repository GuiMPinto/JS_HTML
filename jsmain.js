let form = document.getElementsByTagName('formulario')
//let numA = document.querySelector('#campoA')
//let numB = document.querySelector('#campoB')
let numA = document.getElementById('campoA')
let numB = document.getElementById('campoB')
//const form = document.getElementsByTagName('formulario');
//const numA = document.getElementById('campoA');
//const numB = document.getElementById('campoB');



form.addEventListener('submit',function(e) 
{
   e.preventDefault();
   
   if (numA.value >= numB.value)
   {
      alert("Errado: B não é menor que A");
   }

   else
   {
      alert("Correto: B é menor que A");
   }
})
// Para os inputs temos o valor value. nomeInput.value 