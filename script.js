// ====== arguing buttons ======
document.getElementById("button_1").addEventListener("click", showMsg);
function showMsg() {
  var textDisplay = document.getElementById("textDisplay");
  textDisplay.innerHTML = "I'm right"
};
document.getElementById("button_2").addEventListener("click", showMsg2);
function showMsg2() {
  var textDisplay = document.getElementById("textDisplay");
  textDisplay.innerHTML = "No, I'm right"
};

// ====== don't hover over me element  ======
document.getElementById("dont").addEventListener("mouseover", function(){
    alert("Hey, I told you not to hover over me!");
});
