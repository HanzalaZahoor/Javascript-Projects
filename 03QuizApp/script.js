const questions = [
  {
    que: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    que: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  //   console.log(data);
  quesBox.innerText = ` ${index + 1}) ${data.que}`;
  optionsInput[0].nextElementSibling.innerText = data.a;
  optionsInput[1].nextElementSibling.innerText = data.b;
  optionsInput[2].nextElementSibling.innerText = data.c;
  optionsInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionsInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionsInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("mainbox").innerHTML = `
    <h3>Thank you for playing quiz.</h3>
    <h2>${right}/${total} answers are correct.</h2>
    `;
};

loadQuestion();
