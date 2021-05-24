export class Question {
  questionNumber = 0;
  category = '';
  subCategory = '';
  question = '';
  answer = '';

  constructor(category, subCategory, questionNumber, question, answer) {
    this.category = category;
    this.subCategory = subCategory;
    this.questionNumber = questionNumber;
    this.question = question;
    this.answer = answer;
  }
}
