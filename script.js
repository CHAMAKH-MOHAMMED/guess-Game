'use strict';
// let guess=  int( document.querySelector('.guess').textContent);
let randam_number=Math.trunc(Math.random()*20)+1;

let score=5;

let highscore=0;
    


document.querySelector('.check').addEventListener('click',function(){
    const guess=  Number( document.querySelector('.guess').value);
    if (!guess){
        document.querySelector('.message').textContent='⛔️ No number!';
      return;
    }
    if( guess === randam_number ){
        document.querySelector('.message').textContent='🎉 Correct Number!';
        document.querySelector('.number').textContent=randam_number;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
    
    
    }
    else if( guess > randam_number ){
        document.querySelector('.message').textContent='📈 Too high!';
    
     score =score-1;
     document.querySelector('.score').textContent=score;

    }
    else{
        document.querySelector('.message').textContent='📉 Too low!';
        score =score-1;
        document.querySelector('.score').textContent=score;

    }
 
  

if (score<=0){
    document.querySelector('.message').textContent='💥 You lost the game!';
    document.querySelector('.score').textContent=0;

}

})


document.querySelector('.again').addEventListener('click',function(){
    score=5;
            document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.guess').value="";

})
