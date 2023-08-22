const questions = [
  {
    id: 0,
    question:
      "HTML'de font büyüklüğü ayarlamak için kullanılan özellik nedir ?",
    a: "font-size",
    b: "font-family",
    c: "text-align",
    d: "d-flex",
    correct: "a",
  },
  {
    id: 1,
    question:
      "Javascript için front end kodlamaya yarayan framework hangisidir ? ",
    a: "spring boot",
    b: "flask",
    c: "django",
    d: "react",
    correct: "d",
  },
  {
    id: 2,
    question:
      "Hangisi front end tarafında sayfalara stil özellikleri vermemizi sağlar ?",
    a: "HTML",
    b: "java",
    c: "CSS",
    d: "c#",
    correct: "d",
  },
];

const container = document.querySelector(".container");

const answers = [];

var counter = 0;

const nextQuestion = (checked, c) => {
  if (checked == questions[c].correct) {
    answers.splice(c, 0, true);
  } else {
    answers.splice(c, 0, false);
  }

  if (c + 1 != questions.length) {
    Load(c + 1);
  } else {
    finishGame(answers);
  }
};

const Load = (c) => {
  container.innerHTML = `
    <div class="p-2 fw-bold  fs-4">${questions[c].question}</div>
    <div>
      <div class="p-3 d-flex align-items-center">
        <input type="radio" name="radio" id="a" />
        <label for="a">${questions[c].a}</label>
      </div>
      <div class="p-3">
        <input type="radio" name="radio" id="b" />
        <label for="b">${questions[c].b}</label>
      </div>
      <div class="p-3">
        <input type="radio" name="radio" id="c" />
        <label for="c">${questions[c].c}</label>
      </div>
      <div class="p-3">
        <input type="radio" name="radio" id="d" />
        <label for="d">${questions[c].d}</label>
      </div>
    </div>
    <div class="d-flex justify-content-between p-3">
      <button id="back" class="btn fw-bold"><i class="fa-solid fa-arrow-left p-1"></i> Back</button>

      <button id="next" class="btn fw-bold">Next <i class="fa-solid fa-arrow-right p-1"></i></button>
    </div>
    
    
    `;

  const checked = document.getElementsByTagName("input");

  const nextButton = document.getElementById("next");
  const backButton = document.getElementById("back");

  nextButton.addEventListener("click", () => {
    for (var x = 0; x < 4; x++) {
      if (checked[x].checked) {
        nextQuestion(checked[x].id, c);
      }
    }
  });

  backButton.addEventListener("click", () => {
    if (c - 1 != -1) {
      Load(c - 1);
    }
  });

  if (c == 0) {
    backButton.style.display = "none";
  }

  if (c == questions.length - 1) {
    nextButton.innerText = "Bitir";
  }
};

Load(counter);

const finishGame = (ans) => {
  sum = 0;

  for (var x = 0; x < ans.length; x++) {
    if (ans[x] == true) {
      sum += 20;
    }
  }

  container.innerHTML = `

  <div class="d-flex align-items-center justify-content-center fs-1 h-100">
      Puanınız ${sum} Tebrikler
      <i class="fa-regular fa-face-smile p-2"></i>
    </div>
        
    
    `;
};
