console.log("latihan 6 is active");
/*
question: string
answer : array
correctAnswer : number
*/
function Question(question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correctAnswer = correctAnswer;
}
Question.prototype.displayQuestion = function() {
  console.log("Pertanyaan : " + this.question);
  for (let i = 0; i < this.answer.length; i++) {
    console.log(i + ":" + this.answer[i]);
  }
  //   let number = this.correctAnswer;
  //   prompt("jawaban anda ?");
};

let question1 = new Question(
  "apakah javascript salah satu bahasa terpopuler?",
  ["yes", "no"],
  0
);
let question2 = new Question(
  "siapa yang membuat ini tutorial?",
  ["jane", "dwi", "john"],
  1
);
let question3 = new Question(
  "apa yang di ajar oleh john?",
  ["frontend", "backend", "fullstack", "mobile"],
  3
);

let questions = [question1, question2, question3];

let acak = Math.floor(Math.random() * questions.length);
questions[acak].displayQuestion();
