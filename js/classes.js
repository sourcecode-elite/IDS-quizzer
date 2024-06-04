class Question{
  constructor(ques, options, answer) {
    this.ques = ques;
    this.options = options;
    this.answer = answer;
    this.time_taken = 0;
  }
}

class Quiz{
  constructor(questions) {
    this.tlist = [];
    this.qlist = questions;
  }
}
