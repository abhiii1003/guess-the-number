console.log('jai mata di');
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct number..';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=14;

// document.querySelector('.guess').value=5;
// console.log(document.querySelector('.guess').value);

let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click',function(){
   const guess=  Number(document.querySelector('.guess').value);

   if (!guess) {
    document.querySelector('.message').textContent='no number!..';

   }
   else if (guess==number) {

        document.querySelector('.message').textContent='Correct number...';
        document.querySelector('.number').textContent=number;
        document.querySelector('body').style.backgroundColor='#60b347';
        if (score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;

        }

   }
   else if (guess>number) {
    document.querySelector('.message').textContent='too high!...';
    if(score>1)
   { score--;
    document.querySelector('.score').textContent=score;
    score;}
    else{
        document.querySelector('.message').textContent='you lost the game...';
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor='#FF0000	';


    }
    


   }
   else if (guess<number) {
    document.querySelector('.message').textContent='too low!...';
    
    
    if(score>1)
    { score--;
     document.querySelector('.score').textContent=score;
     score;}
     else{
         document.querySelector('.message').textContent='you lost the game...';
         document.querySelector('.score').textContent=0;
         document.querySelector('body').style.backgroundColor='#FF0000	';

 
     }
     
   }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    
    document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#3e3d3d';




});

