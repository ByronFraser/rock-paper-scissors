




function getWinner(getComputerChoice, getHumanChoice){

        let cScore = 0;
        let hScore = 0;

        for (let i = 1; i < 5; i++){
        let hChoice = prompt('Choose: Rock, Paper or Scissors');
        console.log('Your Choice: ' + hChoice);
        
        cChoice = Math.random()*10*(1/3);
        if ((cChoice <=1)){
            cChoice = 'Rock';
        }else if ((cChoice<2)&&(cChoice>1)){
            cChoice = 'Paper';
        }else cChoice = 'Scissors';
        console.log('Computer :' + cChoice);

        
        
        if ((cChoice == "Paper")&&(hChoice == "Paper")){
            console.log('Tie');
        } else if ((cChoice == "Rock")&&(hChoice == "Rock")){
            console.log('Tie');
        }else if ((cChoice == "Scissors")&&(hChoice == "Scissors")){
            console.log('Tie');
        }else if ((cChoice == "Paper")&&(hChoice == "Rock")){
            console.log('You Loose');
            cScore++;
        }else if ((cChoice == "Paper")&&(hChoice == "Scissors")){
            console.log('You Win');
            hScore++;
        }else if ((cChoice == "Scissors")&&(hChoice == "Rock")){
            console.log('You Win');
            hScore++;
        }else if ((cChoice == "Scissors")&&(hChoice == "Paper")){
            console.log('You Loose');
            cScore++;
        }else if ((cChoice == "Rock")&&(hChoice == "Paper")){
            console.log('You Win');
            hScore++;
        }else if ((cChoice == "Rock")&&(hChoice == "Scissors")){
            console.log('You Loose');
            cScore++;
        } else
        console.log('Incorrect Input');
    }
    console.log('Computer Score:' + cScore + ' Your Score:' + hScore);
    if (cScore>hScore){
        console.log('Computer is the Winner')
    }else if (hScore>cScore){
        console.log('You are the winner')
    } else {
        console.log('It is a Tie');
    }
}
getWinner()