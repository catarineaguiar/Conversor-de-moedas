let capturando ="";
function capturar (){
  capturando = document.getElementById("exchange").value
let capturaFloat = parseFloat(capturando)
let result = 0;
  result = capturaFloat * 5.50
  document.getElementById("valorDigitado").innerHTML = "$ " + result.toFixed(2)
  console.log (capturando)
}