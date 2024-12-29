let cScore = 0;
let hScore = 0;
let tCounter = 0;
        let counter = 0;

const computerText = document.getElementById('computerChoice');
const humanText = document.getElementById('humanChoice');
const scoreText = document.getElementById('scoreTracker');

function getWinner(hChoice){

        console.log("You : " + hChoice);
        
        cChoice = Math.random()*10*(1/3);
        if ((cChoice <=1)){
            cChoice = 'Rock';
        }else if ((cChoice<2)&&(cChoice>1)){
            cChoice = 'Paper';
        }else cChoice = 'Scissors';

        humanText.textContent = 'You : ' + hChoice;
        computerText.textContent = 'Computer : ' + cChoice;
        console.log('Computer : ' + cChoice);

        
        if ((cChoice == "Paper")&&(hChoice == "Paper")){
            console.log('Tie');
            counter++;
            tCounter++;
        } else if ((cChoice == "Rock")&&(hChoice == "Rock")){
            console.log('Tie');
            counter++;
            tCounter++;
        }else if ((cChoice == "Scissors")&&(hChoice == "Scissors")){
            console.log('Tie');
            counter++;
            tCounter++;
        }else if ((cChoice == "Paper")&&(hChoice == "Rock")){
            console.log('You Loose');
            cScore++;
            counter++;
        }else if ((cChoice == "Paper")&&(hChoice == "Scissors")){
            console.log('You Win');
            hScore++;
            counter++;
        }else if ((cChoice == "Scissors")&&(hChoice == "Rock")){
            console.log('You Win');
            hScore++;
            counter++;
        }else if ((cChoice == "Scissors")&&(hChoice == "Paper")){
            console.log('You Loose');
            cScore++;
            counter++;
        }else if ((cChoice == "Rock")&&(hChoice == "Paper")){
            console.log('You Win');
            hScore++;
            counter++;
        }else if ((cChoice == "Rock")&&(hChoice == "Scissors")){
            console.log('You Loose');
            cScore++;
            counter++;
        } else
        console.log('Incorrect Input');
    
    console.log('Computer Score:' + cScore + ' Your Score:' + hScore);
    
    scoreText.textContent = "Score -- " + "Computer: " + cScore + "  You: " + hScore;
    if (counter == 5) {
        alert('Final Score : ' + 'Wins ' + hScore + "  Losses " + cScore + '  Ties ' + tCounter);
    }
}
