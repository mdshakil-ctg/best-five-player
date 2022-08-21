function changeElement (inputId){
    const selectedPlayers = document.querySelector('#selected-players');
    const newElement = document.createElement('li');
    const playerName = document.getElementById(inputId).innerText;
    newElement.innerText = playerName;
    selectedPlayers.appendChild(newElement);
}
function deleteElement(){
    const selectedPlayers = document.querySelector('#selected-players');
     selectedPlayers.removeChild(li[5]);
}
function disabledButton(inputId){
    const Btn = document.getElementById(inputId); 
    Btn.setAttribute('disabled', '');
}
function maximumSelectPlayer (){
    const a = document.querySelectorAll('#selected-players li');
    const b= a.length;
    if(b > 5){
        alert('you cannot choose more than 5 players');
        return false;
    }
    else{
        
    }
}

document.getElementById('player1-btn').addEventListener('click',function(){
    changeElement("player1-name");
    disabledButton('player1-btn');
    maximumSelectPlayer();
})
document.getElementById('player2-btn').addEventListener('click',function(){
    changeElement('player2-name');
    disabledButton('player2-btn');
    maximumSelectPlayer();
})
document.getElementById('player3-btn').addEventListener('click',function(){
    changeElement('player3-name');
    disabledButton('player3-btn');
    maximumSelectPlayer();
})
document.getElementById('player4-btn').addEventListener('click',function(){
    changeElement('player4-name');
    disabledButton('player4-btn');
    maximumSelectPlayer();
})
document.getElementById('player5-btn').addEventListener('click',function(){
    changeElement('player5-name');
    disabledButton('player5-btn');
    maximumSelectPlayer();
})
document.getElementById('player6-btn').addEventListener('click',function(){
    changeElement('player6-name');
    disabledButton('player6-btn');
    maximumSelectPlayer();
})

