export class Question {
  questionNumber = 0;
  category = '';
  subCategory = '';
  question = '';
  answer = '';

  constructor(questionNumber, category, subCategory, question, answer) {
    this.questionNumber = questionNumber;
    this.category = category;
    this.subCategory = subCategory;
    this.question = question;
    this.answer = answer;
  }
}
