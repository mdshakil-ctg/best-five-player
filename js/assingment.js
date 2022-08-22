function changeElement (inputId, btnId){
    const selectedPlayers = document.querySelector('#selected-players');
    const newElement = document.createElement('li');
    const playerName = document.getElementById(inputId).innerText;
    const a = document.querySelectorAll('#selected-players li').length;
    if(a < 5){
        newElement.innerText = playerName;
    selectedPlayers.appendChild(newElement);
    disabledButton(btnId);
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

function getElementTextValue(elementId){
    const elementValue = document.getElementById(elementId).innerText;
    const elementNumber = parseInt(elementValue);
    return elementNumber;
}
function getElementValue(elementId){
    const elementValue = document.getElementById(elementId).value;
    const elementNumber = parseInt(elementValue);
    return elementNumber;
}

// all players addEventListener here 

document.getElementById('player1-btn').addEventListener('click',function(){
    changeElement("player1-name" , "player1-btn");
})

document.getElementById('player2-btn').addEventListener('click',function(){
    changeElement('player2-name', 'player2-btn');
})

document.getElementById('player3-btn').addEventListener('click',function(){
    changeElement('player3-name', 'player3-btn');
})

document.getElementById('player4-btn').addEventListener('click',function(){
    changeElement('player4-name', 'player4-btn');
})

document.getElementById('player5-btn').addEventListener('click',function(){
    changeElement('player5-name', 'player5-btn');
})

document.getElementById('player6-btn').addEventListener('click',function(){
    changeElement('player6-name', 'player6-btn');
})
// calculate btn addEventListener here 

document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerCost = document.getElementById('player-cost').value;
    const playerList = document.querySelectorAll('#selected-players li').length;
    const playerExpenseElement = document.getElementById('player-expenses');

    if( playerCost === "" || isNaN(playerCost)){
        alert('You must filled the amount value in budget')
    }
    else{
        const totalPlayerExpenses = playerCost * playerList;
    playerExpenseElement.innerText = totalPlayerExpenses;
    }
})
// total calculate evenlistener here 
document.getElementById('total-btn').addEventListener('click', function(){
    const playerExpenseValue = getElementTextValue("player-expenses");
    const managerExpenseValue = getElementValue('manager-expense');
    const coachExpenseValue = getElementValue('coach-expense'); 
    const totalExpenseElement = document.getElementById('total-expense');

    if(managerExpenseValue === "" || isNaN(managerExpenseValue) || coachExpenseValue === "" || isNaN(coachExpenseValue)){
        alert('You must filled the amount value of expenses');
    }
    else{
        totalExpenseElement.innerText = playerExpenseValue + managerExpenseValue + coachExpenseValue;
    }
})
