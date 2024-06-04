//Author: Saransh
//my consts
const quizCategories = ["Science", "History", "Current Affairs", "Countries & Cultures", "Geography"];


//speech recognition variables
if(document.onload) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;



  const grammar = `#JSGF V1.0; grammar colors; public <color> = $(quizCategories.join(
  " | ",
)};`;

  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
//speech variables init over

//fine-tuning speech recognition
  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

// self const

  const quizInput = document.getElementById("quizCategory");


  console.log(quizInput);

//voice recognition capability
  function voiceRecon() {
    recognition.start();

    recognition.onresult = (event) => {
      const res = event.results[0][0].transcript;
      quizInput.value = res;
    };

    recognition.onnomatch = (event) => {
      alert("The said is probably not a valid quiz category");
    };

    recognition.onerror = (event) => {
      alert("There was some error" + event);
    };
    //auto stops recon when speech ends
    recognition.onspeechend = () => {
      recognition.stop();
    };

  }


//this brace is for the window.onload()

}


//quiz starting

var quizState = {
  mode: 0,
  category: 0
}
function startQuiz() {
  //category selection
  quizState.category = quizCategories.indexOf(document.getElementById('quizCategory').value);

  if (quizState.category === -1) {
    alert("You did not select a valid category!!!");
    return;
  }

  //mode selection
  if (document.getElementById('ez').checked) {
    quizState.mode = 0;
  } else if (document.getElementById('medium').checked) {
    quizState.mode = 1;
  } else if (document.getElementById('hard').checked) {
    quizState.mode = 2;
  } else {
    alert("You did not select a proper mode of the quiz!!");
  }
  //disable this button, only to be enabled after quiz ends
  document.getElementById('go').disabled = true;


  setQuiz();

}

//Calculator code
const calcOutput = document.getElementById('calcResult');

//links numerical and sign buttons to result
for(let btn of document.querySelectorAll(".buttons>.row>button")){
  if(btn.value === 'C' || btn.value === '=') continue;
    btn.addEventListener('click',
      (event) => {calcOutput.value += event.target.value;})
}

//C button clears
document.getElementById('calcClear').addEventListener('click',() => {
  calcOutput.value = '';
  }
  );

//equal button onclick

function calculate(){
  try {
    calcOutput.value = eval(calcOutput.value);
  }
  catch (error){
    alert("An error occurred: " + error);
  }
}



