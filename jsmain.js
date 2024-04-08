document.querySelector('.formulario').addEventListener('submit', function(e) {

   e.preventDefault();

   let numA = document.getElementById('campoA');
   let numB = document.getElementById('campoB');
   let errado = `ERRADO! ${numB.value} não é maior que ${numA.value}`;
   let certo = `CERTO! ${numB.value} é maior que ${numA.value}`;

   if (parseInt(numB.value) > parseInt(numA.value))
   {
      document.querySelector('h2').innerHTML = certo
      
      //alert("Correto: B é maior que A");
   }
   else
   {
      document.querySelector('h2').innerHTML = errado
      
      //alert("Errado: B não é maior que A");
   }

});


/*
let formulario = document.getElementById('formulario')
//let numA = document.querySelector('#campoA')
//let numB = document.querySelector('#campoB')

//const form = document.getElementsByTagName('formulario');
//const numA = document.getElementById('campoA');
//const numB = document.getElementById('campoB');



formulario.addEventListener('submit',function(e) 
{
   e.preventDefault();
   let numA = document.getElementById('campoA')
   let numB = document.getElementById('campoB')
   if (parsefloat(numA.value) >= parsefloat(numB.value))
   {
      alert("Errado: B não é menor que A");
   }

   else
   {
      alert("Correto: B é menor que A");
   }
})*/
// Para os inputs temos o valor value. nomeInput.value 