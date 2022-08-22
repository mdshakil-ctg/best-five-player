function changeElement (inputId){
    const selectedPlayers = document.querySelector('#selected-players');
    const newElement = document.createElement('li');
    const playerName = document.getElementById(inputId).innerText;
    const a = document.querySelectorAll('#selected-players li').length;
    if(a < 5){
        newElement.innerText = playerName;
    selectedPlayers.appendChild(newElement);
    }
    else{
        alert('you can not choose over 5 player');
    }
    
}
function deleteElement(){
    const selectedPlayers = document.querySelector('#selected-players');
     selectedPlayers.removeChild(li[5]);
}
function disabledButton(inputId){
    const eventButton = document.getElementById(inputId); 
    eventButton.setAttribute('disabled', '');
}

document.getElementById('player1-btn').addEventListener('click',function(){
    disabledButton('player1-btn');
    changeElement("player1-name");
    
})
document.getElementById('player2-btn').addEventListener('click',function(){
    disabledButton('player2-btn');
    changeElement('player2-name');
    
})
document.getElementById('player3-btn').addEventListener('click',function(){
    disabledButton('player3-btn');
    changeElement('player3-name');
    
})
document.getElementById('player4-btn').addEventListener('click',function(){
    disabledButton('player4-btn');
    changeElement('player4-name');
    
})
document.getElementById('player5-btn').addEventListener('click',function(){
    disabledButton('player5-btn');
    changeElement('player5-name');
    
})
document.getElementById('player6-btn').addEventListener('click',function(){
    disabledButton('player6-btn');
    changeElement('player6-name');
    
})

document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerCost = document.getElementById('player-cost').value;
    const playerList = document.querySelectorAll('#selected-players li').length;
    const playerExpenseElement = document.getElementById('player-expenses');
    const totalPlayerExpenses = playerCost * playerList;
    playerExpenseElement.innerText = totalPlayerExpenses;
})

