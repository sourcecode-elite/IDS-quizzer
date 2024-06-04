//variables of global importance
var category = null;
var randoms_done = [];
var random;
var answerTimes = [];
const nxtButton = document.getElementById("nxtButton");
const optButtons = document.getElementsByClassName("option");
const progressBar = document.getElementById("ProgressBar");
const correctProgress = '<div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>';
const wrongProgress = '<div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>';
var timerValue = 15;
var timeIntervalID = null; //yet to start
const resultTag = document.getElementById("result");
var score = 0;
const quizSelectionDiv = document.getElementById("quiz-selection");

function setQuiz() {
  switch (quizState.category) {
    case 0:
      category = Science;
      break;
    case 1:
      category = History;
      break;
    case 2:
      category = Current_Affairs;
      break;
    case 3:
      category = Geography;
      break;
    case 4:
      category = Countries_and_Cultures;
      break;
    default:
      alert("You rigged the game!!!");
      return;
  }
  resultTag.innerHTML = "";
  resultTag.style = "display: none;";
  //disables everything till quiz end
  for(let elem of document.querySelectorAll("#quiz-selection>*")){
    elem.classList.toggle('disabled');
  }

  Quiz();
}

function Quiz() {
  if (randoms_done.length < 5) {
    putQuestion();
  } else {
    endQuiz();
  }
}

function putQuestion() {
  //hide the nxt button
  nxtButton.style = "display: none;";
  if(randoms_done.length === 5){
    endQuiz();
    return;
  }
  while (true) {
    random = Math.floor(Math.random() * 5);
    if(random === 5) continue;
    if (!randoms_done.includes(random)) {
      randoms_done.push(random);
      break;
    }
  }
  //put text in questions and options
  document.getElementById("Question").innerText = category[quizState.mode][random].question;

  let t_idx = 0;
  for (let option of document.getElementsByClassName("option")) {
    option.style = 'background-color:white;'
    option.innerText = category[quizState.mode][random].options[t_idx];
    option.addEventListener("click", checkAnswer);
    t_idx++;
  }
  // start the timer
  timerValue = 15;
  timeIntervalID = setInterval(timer, 1000);

}

function checkAnswer(timedOut = false) {
  //stop timer and show the nxt button for proceeding
  clearInterval(timeIntervalID);
  answerTimes.push(15 - timerValue);
  let timer_copy_for_score = timerValue;
  timerValue = 15; //reset
  nxtButton.style = "display: block;";
  if(timerValue <= 0){
    optButtons[category[quizState.mode][random].answer].style = "background-color: green";
    progressBar.innerHTML += wrongProgress;
    console.log("timed out");
  }else {

    //correct answer
    if (this.value == category[quizState.mode][random].answer) {
      this.style = "background-color: green;";
      progressBar.innerHTML += correctProgress;
      score += Math.abs(10/(10-timer_copy_for_score));
    } else {      // wrong answer
      //make this one red and the correct one green
      this.style = "background-color: red;";
      progressBar.innerHTML += wrongProgress;
      optButtons[category[quizState.mode][random].answer].style = "background-color: green";
      score += 0;
    }

  }
  for (let opt of optButtons) {
    opt.removeEventListener("click", checkAnswer);
  }
}

function endQuiz(){
  document.getElementById("Question").innerText = "The quiz is over";
  for(let option of document.getElementsByClassName("option")){
    option.style = "display:none";
  }
  resultTag.style = "display:block;";
  resultTag.innerText = "The time required for you was " + answerTimes.toString();
  resultTag.innerText += "\nThe score was " + score;
  nxtButton.style = "display: none;";
  //enabling as quiz has ended
  document.getElementById('go').disabled = false;
}


function timer(){
  if(timerValue === 0){
    checkAnswer();
    clearInterval(timeIntervalID);
    return;
  }
  document.getElementById('timer').innerText = --timerValue;
}

