function add() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = parseFloat(a) + parseFloat(b);
  document.getElementById("result").innerHTML = c;
}
function subtract() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = a - b
  document.getElementById("result").innerHTML = c;
}
function multiply() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = a * b
  document.getElementById("result").innerHTML = c;
}
function divide() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = a / b
  document.getElementById("result").innerHTML = c;
}
