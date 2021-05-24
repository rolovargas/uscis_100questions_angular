export class Question {
  questionNumber: number = 0;
  category: string = '';
  subCategory: string = '';
  question: string = '';
  answer: string = '';

  constructor(category: string, subCategory: string, questionNumber: number, question: string, answer: string) {
    this.category = category;
    this.subCategory = subCategory;
    this.questionNumber = questionNumber;
    this.question = question;
    this.answer = answer;
  }
}
