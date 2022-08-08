const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const ans = document.querySelector('.pOut');
const cpu = document.querySelector('.cOut');
const winner = document.querySelector('.winner');
const score = document.querySelector('.score');
const end = document.querySelector('.end');

rock.addEventListener('click', ()=>playerMove(0));
paper.addEventListener('click', ()=>playerMove(1));
scissors.addEventListener('click', ()=>playerMove(2));

var cpuW = 0;
var playerW = 0;
const GAMES = 5;

function playerMove(num){
    ans.textContent = rps(num);
    cpuNum = cpuGuess();
    win = compare(num, cpuNum);
    if(win === 1){
        playerW++;
    }else if((win === 2)){
        cpuW++;
    }
    score.textContent =`${playerW} : ${cpuW}`;
    if(cpuW === GAMES){
        end.textContent = "GAME OVER CPU WINS"
        gameOver();
    }else if(playerW === GAMES){
        end.textContent = "GAME OVER YOU WIN"
        gameOver();
    }
}
//dictionary
function rps(num){
    let dict = {
        0:"rock",
        1:"paper",
        2:"scissors"
    }
    return dict[num]
}
function cpuGuess(){
    let ran = Math.floor(Math.random()*3);
    let ranGuess = rps(ran)
    cpu.textContent = ranGuess;
    return ran
}

function compare(playerNum, cpuNum){
    //0 beats 2, 1 beats 0, 2 beats 1
    //return 1 player win, 2 cpu win
    if(playerNum === cpuNum){
        winner.textContent = "TIE"
    } else if(playerNum === 0 && cpuNum === 1){
        winner.textContent = "CPU WINS"
    } else if(playerNum === 1 && cpuNum === 0){
        winner.textContent = "PLAYER WINS"
    } else if(playerNum === 0 && cpuNum === 2){
        winner.textContent = "PLAYER WINS"
    }else if(playerNum === 2 && cpuNum === 0){
        winner.textContent = "CPU WINS"
    } else if(playerNum === 2 && cpuNum === 1){
        winner.textContent = "PLAYER WINS"
    }else if(playerNum === 1 && cpuNum === 2){
        winner.textContent = "CPU WINS"
    }else{winner.textContent = "undefined result"}

    if( winner.textContent == "CPU WINS"){
        return 2;
    }else{
        return 1;
    }
}
//disable buttons, add reset button
function gameOver() {

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', reset);
}
//empty text fields remove reset button
function reset(){
    winner.textContent = "";
    end.textContent = "";
    score.textContent = "";
    ans.textContent = "";
    cpu.textContent = "";
    resetButton.parentNode.removeChild(resetButton);

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    cpuW = 0;
    playerW = 0;
}
