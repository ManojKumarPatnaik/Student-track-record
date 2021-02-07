const quizDB=[{
    question:"Q1:What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text MarkUp Language",
    c:"HyperText Makeup Language",
    d:"HyperText Markup Language",
    ans:"ans4"
},
{
    question:"Q2:What Is THe Full form CSS?",
    a:"Cascading Style Sheets",
    b:"Cascading Style Sheep",
    c:"Cartoon Style Sheets",
    d:"Cascading super sheets",
    ans:"ans1"
},
{
    question:"Q3:What Is THe Full form OS?",
    a:"Operating System",
    b:"Operating Setting",
    c:"Oxford System",
    d:"Operating Service",
    ans:"ans1"
},
{
    question:"Q4:What Is THe Full form AWS?",
    a:"Amazon Web Setting",
    b:"Amazing Web Service",
    c:"Amazon Web Service",
    d:"Apple Web Service",
    ans:"ans3"
},
{
    question:"Q5:Who Develop ReactJS ?",
    a:"Facebook",
    b:"Apple",
    c:"Google",
    d:"Amazon",
    ans:"ans1"
},
{
    question:"Q6:Who develop flutter?",
    a:"Facebook",
    b:"Apple",
    c:"Google",
    d:"Amazon",
    ans:"ans3"
},
{
    question:"Q7:Who develop Android?",
    a:"Facebook",
    b:"Apple",
    c:"Google",
    d:"Amazon",
    ans:"ans3"
},
{
    question:"Q8:Who develop Windows?",
    a:"Facebook",
    b:"Apple",
    c:"Google",
    d:"Microsoft",
    ans:"ans4"
},
{
    question:"Q9:What is the Full Form of HTTP?",
    a:"HyperText Transfer Prpduct",
    b:"HyperText Test Protocol",
    c:"Hyper Transfer Protocol",
    d:"HyperText Transfer Protocol",
    ans:"ans4"
},{
    question:"Q10:What is the full form of JS?",
    a:"JavaScript",
    b:"JavaSuper",
    c:"JustScript",
    d:"JustSuper ",
    ans:"ans1"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const ShowScore = document.querySelector('#ShowScore');

let questioncount=0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questioncount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};


loadQuestion();
 

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

   deselectAll();
    
    if(questioncount<quizDB.length){
        loadQuestion();
}else{
     
   ShowScore.innerHTML = `
   <h3>you scored ${score}/${quizDB.length} 🎁💝 </h3>
<button class="btn" onclick="location.reload()">Play Again </button>
   `;
   ShowScore.classList.remove('ScoreArea');
    }
});






