import { QuestionsService } from './../questions.service';

import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  maxQuestionsAllowed = 20;
  minCorrectQuestionsToPass = 12;
  questionsTaken = 0;
  questionsAttempted: Question[] = [];
  currentQuestion: Question = new Question('', '', 0, '', '');
  showAnswerFlag = false;
  totalCorrect = 0;
  totalWrong = 0;
  endMessage = '';
  endPic = '';

  get currentAnswerList(): string[] {
    let result: string[] = [];
    if (this.currentQuestion.questionNumber > 0) {
      result = this.currentQuestion.answer.split('\n');
    }
    return result;
  }

  ngOnInit() {
    this.resetQuestionnaire();
  }

  getNextQuestion() {
    if (this.questionsTaken === this.maxQuestionsAllowed) {
      this.finishQuestionnaire();
    }
    else {
      const nextQuestion = this.questionsService.getNextQuestion(this.questionsAttempted);
      this.questionsAttempted.push(nextQuestion);
      this.currentQuestion = nextQuestion;
      this.showAnswerFlag = false;
      this.questionsTaken++;
      this.endMessage = '';
      // console.log(JSON.stringify(nextQuestion));
    }
  }

  showAnswer() {
    this.showAnswerFlag = true;
  }

  correctAnswer() {
    this.totalCorrect++;
    this.getNextQuestion();
  }

  wrongAnswer() {
    this.totalWrong++;
    this.getNextQuestion();
  }

  finishQuestionnaire() {
    if (this.totalCorrect >= this.minCorrectQuestionsToPass) {
      this.endMessage = 'Congratulations! You have passed the test!';
      this.endPic = 'assets/passed.svg';
    } else {
      this.endMessage = 'You\'ve failed the test. Better luck next time';
      this.endPic = 'assets/failed.svg';
    }
    this.currentQuestion = new Question('', '', 0, '','');
  }

  resetQuestionnaire() {
    this.maxQuestionsAllowed = 20;
    this.questionsTaken = 0;
    this.questionsAttempted = [];
    this.currentQuestion = new Question('', '', 0, '','');
    this.showAnswerFlag = false;
    this.totalCorrect = 0;
    this.totalWrong = 0;
  }

  startQuestionnaire() {
    this.resetQuestionnaire();
    this.getNextQuestion();
  }
}
