function gs(){
  var element = document.getElementById("vid");
  element.classList.toggle("grayscale");
}

var interval = setInterval(clock, 1000);

function clock() {
  var date = new Date();
  document.getElementById("clck").innerHTML = date.toLocaleTimeString();
}
//ABOVE FUNCTION USED FROM https://www.w3schools.com/js/js_timing.asp

function light() {
   var element = document.body;
   element.classList.toggle("light-mode");
}
//ABOVE FUNCTION USED FROM https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
