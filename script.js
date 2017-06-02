// ====== arguing buttons ======
var button1 = document.getElementById('button_1');
var button2 = document.getElementById('button_2');

button1.addEventListener("click", function() {
  var textDisplay = document.getElementById("textDisplay");
  textDisplay.innerHTML = "I'm right"
})

button2.addEventListener("click", function() {
  var textDisplay = document.getElementById("textDisplay");
  textDisplay.innerHTML = "No, I'm right!"
})

// ====== don't hover over me element  ======
var dont = document.getElementById('dont');

dont.addEventListener("mouseover", function() {
  alert("Hey, I told you not to hover over me!");
})

// // ====== keypress display  ======
// document.getElementById("keypress").addEventListener("keypress", myKeypress);
//
// function myKeypress() {
//     document.getElementById("text") =
// }
var keyPress = document.getElementById('keys');

keyPress.addEventListener("keypress", function() {
  keyPress.innerHTML = " "
})
