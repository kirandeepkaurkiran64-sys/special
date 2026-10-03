const questions = [

{
question:"Who fell in love first?",
options:["Me ❤️","You ❤️","Both Together 💕","Not Sure 🤭"]
},

{
question:"Who says 'I love you' more?",
options:["Me ❤️","You ❤️","Equal ❤️","No One 😂"]
},

{
question:"Who gets jealous more?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who is more dramatic?",
options:["Me","You","Both","Neither"]
},

{
question:"Who apologizes first?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who misses the other more?",
options:["Me","You","Both","Equal"]
},

{
question:"Who is more stubborn?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who laughs more?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who starts conversations first?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who is more romantic?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who gives better surprises?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who sleeps first?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who is cuter?",
options:["Me 😎","You 😍","Both ❤️","Can't Decide"]
},

{
question:"Who gets angry first?",
options:["Me","You","Both","Nobody"]
},

{
question:"Who loves the other more?",
options:["Me ❤️","You ❤️","Infinity ♾️","Impossible to Measure ❤️"]

}

];

let currentQuestion=0;

let answers=JSON.parse(localStorage.getItem("quizAnswers")) || [];

loadQuestion();

function loadQuestion(){

document.getElementById("question").innerHTML=
questions[currentQuestion].question;

document.getElementById("questionNumber").innerHTML=
`Question ${currentQuestion+1} of ${questions.length}`;

document.getElementById("progressFill").style.width=
((currentQuestion+1)/questions.length)*100+"%";

let optionHTML="";

questions[currentQuestion].options.forEach((option,index)=>{

optionHTML+=`

<label class="option">

<input type="radio" name="answer"

value="${option}"

${answers[currentQuestion]==option?"checked":""}>

<span>${option}</span>

</label>

`;

});

document.querySelector(".options").innerHTML=optionHTML;

document.getElementById("prevBtn").style.display=
currentQuestion==0?"none":"inline-block";

if(currentQuestion==questions.length-1){

document.getElementById("nextBtn").style.display="none";

document.getElementById("submitBtn").style.display="inline-block";

}
else{

document.getElementById("nextBtn").style.display="inline-block";

document.getElementById("submitBtn").style.display="none";

}

}

function saveAnswer(){

let selected=document.querySelector('input[name="answer"]:checked');

if(selected){

answers[currentQuestion]=selected.value;

localStorage.setItem("quizAnswers",JSON.stringify(answers));

}

}

function nextQuestion(){

saveAnswer();

if(currentQuestion<questions.length-1){

currentQuestion++;

loadQuestion();

}

}

function previousQuestion(){

saveAnswer();

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

}

function submitQuiz(){

saveAnswer();

document.querySelector(".quiz-container").style.display="none";

document.getElementById("resultPage").style.display="flex";

document.getElementById("scoreText").innerHTML=

`You answered ${answers.length} / ${questions.length} questions`;

}

function viewAnswers(){

document.getElementById("resultPage").style.display="none";

document.getElementById("answersPage").style.display="block";

let list="";

for(let i=0;i<questions.length;i++){

list+=`

<div class="answer-card">

<h3>Question ${i+1}</h3>

<p><b>${questions[i].question}</b></p>

<p>Your Answer: ${answers[i] || "Not Answered"}</p>

</div>

`;

}

document.getElementById("answersList").innerHTML=list;

}

function restartQuiz(){

localStorage.removeItem("quizAnswers");

location.reload();

}