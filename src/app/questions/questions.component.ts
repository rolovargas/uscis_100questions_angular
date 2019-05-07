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

  maxQuestionsAllowed = 10;
  questionsTaken = 0;
  questionsAttempted: Question[] = [];
  currentQuestion: Question = null;
  showAnswerFlag = false;
  totalCorrect = 0;
  totalWrong = 0;
  endMessage = '';

  get currentAnswerList(): string[] {
    let result = [];
    if (this.currentQuestion != null) {
      result = this.currentQuestion.answer.split('\n');
    }
    return result;
  }

  ngOnInit() {
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
    if (this.totalCorrect >= 6) {
      this.endMessage = 'Congratulations! You have passed the test!';
    } else {
      this.endMessage = 'You\'ve failed the test. Better luck next time';
    }
    this.maxQuestionsAllowed = 6;
    this.questionsTaken = 0;
    this.questionsAttempted = [];
    this.currentQuestion = null;
    this.showAnswerFlag = false;
    this.totalCorrect = 0;
    this.totalWrong = 0;
  }
}
