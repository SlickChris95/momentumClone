var sound = new Audio('notification.wav');
var timer = document.getElementById('timer')
// var quote = document.getElementById('quote');
var fifteen = 900000;

function playSound(){
  sound.play();
  alert('Get back to work!');
}
function alertSound(){
  alert('Timer has been set to 15 mins!');
  timer.style.color="blue";
  setTimeout(function(){
    playSound();
  },fifteen);
}
