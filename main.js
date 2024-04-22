let quizData = [
    {
        question: "What is the most used programming language in 2024?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        a: "let myVar = 10;",
        b: "var myVar = 10;",
        c: "const myVar = 10;",
        d: "all of the above",
        correct: "d",
    },
    {
        question: "What is the result of the expression 5 + '5' in JavaScript?",
        a: "55",
        b: "10",
        c: "'10'",
        d: "15",
        correct: "a",
    },
    {
        question: "What is the output of this code snippet? for(let i = 0; i < 3; i++) {console.log(i);}",
        a: "123",
        b: "012",
        c: "null",
        d: "none of the above",
        correct: "b",
    },
];

let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let incorrect = document.getElementById("incorrect");
let submitBtn = document.getElementById("submit");

let currectData = 0;
let degree = 0;

// load quiz
function loadQuiz() {
    deletCheck();
    let currectqiz = quizData[currectData];
    questionEl.innerHTML = currectqiz.question;
    a_text.innerHTML = currectqiz.a;
    b_text.innerHTML = currectqiz.b;
    c_text.innerHTML = currectqiz.c;
    d_text.innerHTML = currectqiz.d;
}
loadQuiz()

// select function
function selectAnswer() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    });
    return answer
}

// delet chech
function deletCheck() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    } )
};

// subnit function 
submitBtn.addEventListener("click" , ()=> {
    let answer = selectAnswer();
    if(answer == quizData[currectData].correct){
        degree ++;
    }

    if (answer == undefined) {
        incorrect.innerHTML = "You Should Select Answer"
    }else {
        incorrect.innerHTML = ""
        currectData ++
    }
    

    if (currectData < quizData.length) {
        loadQuiz();
    }else {
        quiz.innerHTML = `
                <h2>You answered correctly at ${degree}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
})