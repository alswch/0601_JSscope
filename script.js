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

// ====== keypress display  ======
window.onkeypress = function(e) {
  // console.log("== displayKeypress ==");
  // console.log(e.keyCode);
  var codeKey = String.fromCharCode(e.keyCode);
  console.log(codeKey);
  document.getElementById('keys').innerHTML = codeKey;
}

// username/password form validation
var username = document.getElementById('user');
var password = document.getElementById('pass');
var login = document.getElementById('login');
var message = document.getElementById('message');

login.addEventListener("click", function() {
  if (username.value.length < 14 && password.value == 12345678) {
    message.innerHTML = "Congrats on knowing your username and password!";
  } else {
    alert("Incorrect username or password");
  }
})
