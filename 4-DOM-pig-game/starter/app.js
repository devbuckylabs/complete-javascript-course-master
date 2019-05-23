



var scores, activePlayer, roundScore, isPlaying;


init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    var dice= Math.floor((Math.random() * 6) + 1);
    
    if(isPlaying){
    
    if(dice!==1){
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    console.log('dice-'+ dice +'.png');
    diceDOM.src = 'dice-'+ dice +'.png';
    console.log(dice);
    roundScore += dice;
    document.getElementById('current-'+activePlayer).textContent =roundScore;
    
    
    }
    else{
        console.log(dice);
        nextPlayer();
    }
    
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){

  if(isPlaying){
    scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
   
    if(scores[activePlayer]>=20){
        isPlaying=false;
         document.getElementById('name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    }
    else{
    nextPlayer(); 
    }
}
    
});


document.querySelector('.btn-new').addEventListener('click', function(){

init();

});


function init() {
    
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    isPlaying =true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    

}


function nextPlayer(){
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer = activePlayer == 0 ? 1 : 0;
    roundScore=0;
    console.log('activePlayer : '+activePlayer);
    
    
    

    
    
    
    
    
    
    
    
}
