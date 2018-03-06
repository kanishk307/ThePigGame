var scores, activePlayer, roundScore , dice;

var scoreLimit = prompt("Please enter the maximum score", 100);

scores=[0,0];
activePlayer=0;
roundScore=0;

var dice=Math.floor(Math.random() * 6) + 1 ;
console.log(dice);

document.querySelector('#current-'+activePlayer).textContent = dice;

//Setting zero
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
//Hide the dice
document.querySelector('.dice').style.display='none';


//Roll the dice button
document.querySelector('.btn-roll').addEventListener('click',function(){
//Generate a random number
    dice=Math.floor(Math.random() * 6) + 1 ;
    console.log(dice);
    //Display the dice
    document.querySelector('.dice').style.display='block';
    //Display the correct dice
    document.querySelector('.dice').src='dice-'+dice + '.png';
    
   

if(dice === 1){
    //switch
    switchPlayer();
}
    else {
         //Add score
    roundScore=roundScore+dice;
    //Display score
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer] += roundScore;
    
    //Display UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= scoreLimit) {
    
     document.querySelector('#player-'+activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.btn-roll').style.display='none';
    document.querySelector('.btn-hold').style.display='none';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}    
    
    else {
    //Switch
    switchPlayer();
        
    }
    
    
    //Hide the dice
document.querySelector('.dice').style.display='none';



});


document.querySelector('.btn-new').addEventListener('click',function() {
   
    scores=[0,0];
activePlayer=0;
roundScore=0;   
    
    //Setting zero
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
//Hide the dice
document.querySelector('.dice').style.display='none';
    
//Changing names
    document.querySelector('#player-0').textContent = 'Player 1';
document.querySelector('#player-1').textContent = 'Player 2';
    

//Making things active
 document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
    
//Bringing back buttons and dice
    document.querySelector('.dice').style.display='block';
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';
    
    
});


function switchPlayer() {
      if(activePlayer === 0){
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }

 roundScore = 0;
    
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-0').textContent='0';
    
    //Changing active user
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}
