var timer = 60;
var score = 0;
var hitrn = 0;

// bubble part
function mackbubble(){
    var bubble = "";
for(var i = 1; i<=308; i++){
    var rn = Math.floor(Math.random()*10)
    bubble += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = bubble;
}

// timer part
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br> Thank you by Subir.</h1>`;
        }
    }, 1000);
}

// hit part
function gatNewHit(){
   hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

// score part
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        mackbubble();
        gatNewHit();
    }
})

runTimer();
mackbubble();
gatNewHit();
// increaseScore();