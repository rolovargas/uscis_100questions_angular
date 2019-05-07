export class Question {
  category = '';
  subCategory = '';
  question = '';
  answer = '';

  constructor(category, subCategory, question, answer) {
    this.category = category;
    this.subCategory = subCategory;
    this.question = question;
    this.answer = answer;
  }
}
