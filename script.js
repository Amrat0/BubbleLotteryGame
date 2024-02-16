var timer = 60;
var score = 0;
var hitRandomGen = 0;
// event bubbling : jispa click karoga woh element par event rise karaga, aur
// event listner na milna par event element ka parent pa listner dondaga waaha pa na mila to parent ka parent parent pa listner dondaga 
function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 102; i++) {
    var rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`
  }
  document.querySelector("#pbot").innerHTML = clutter;
}
function runnerTimer() {
  var timers = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {


      clearInterval(timers)
      document.querySelector("#pbot").innerHTML = `<h1>Game Over  ${score} <i class="fas fa-heart"></i> </h1>  `
    }
  }, 1000)
}
function getHit() {
  hitRandomGen = Math.floor(Math.random() * 10)
  document.querySelector("#hitval").textContent = hitRandomGen;
}
function getScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbot")
  .addEventListener('click', function (dets) {
    var hitNumbers = (Number(dets.target.textContent))
    if (hitNumbers === hitRandomGen) {
      getScore();
      getHit();
      makeBubble();
    }
  });

getScore()
getHit()
runnerTimer()
makeBubble()
