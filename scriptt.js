function shot1() {
       document.getElementById('tool').style.animation = "fire 2s";
       document.getElementById('vil').style.animation = "shot1vil 4s";
}
function shot2() {
       document.getElementById('tool').style.animation = "fire 2s";
       document.getElementById('vil').style.animation = "shot2vil 4s";
}
function shot3() {
       document.getElementById('tool').style.animation = "fire 2s";
       document.getElementById('vil').style.animation = "shot3vil 4s";
}
function moveIron(){
       document.getElementById('hero').style.transform="rotate(60deg)";
}
window.addEventListener("onload", moveIron);