function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let randomNum = getRandomInt(20)

const submitBtn = document.getElementById('submit');
const highOrLow = document.getElementById('high-low');
const score = document.getElementById('score');
const highscore = document.getElementById('highscore');
const guessBox = document.getElementById('numberToGuess');
const resetBtn = document.getElementById('reset');
const body = document.querySelector('body');

let startScore = 15;
let highScoreCount = 0;
console.log(randomNum)

submitBtn.addEventListener('click',function(){
    body.style.backgroundColor = "grey";
    let userNumber = document.getElementById('number').value;
    let digit = Number(userNumber);

    if(digit > randomNum){
        startScore--;
        score.innerHTML = 'Score: ' + startScore;
        highOrLow.value = '';
        highOrLow.innerHTML = 'Too high!';
    }

    else if(digit < randomNum) {
        startScore--;
        score.innerHTML = 'Score: ' + startScore;
        highOrLow.innerHTML = '';
        highOrLow.innerHTML = 'Too low!';
    }
    if (digit == randomNum) {
        guessBox.innerHTML = digit;
        body.style.backgroundColor = "green";
        highScoreCount++;
        highscore.innerHTML = 'Highscore ' + highScoreCount;
        randomNum = getRandomInt(20);
    }
    


    console.log('random num is ' + randomNum)
    //console.log('digit is ' + digit)
    if (startScore == 0) {
        alert('GAME OVER!')
    }
});


resetBtn.addEventListener('click',function(){
    highScoreCount = 0;
    startScore = 15;
    guessBox.innerHTML = '?';
    highscore.innerHTML = 'Highscore ' + highScoreCount;
    score.innerHTML = 'Score: ' + startScore;

})


