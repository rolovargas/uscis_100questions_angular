import { QuestionsService } from './../questions.service';
import { Question } from './../question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {


  allQuestions: Question[] = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.allQuestions = this.questionsService.getAllQuestions();
  }

  formatAnswer(answer: string): string[] {
    let result = [];
    result = answer.split('\n');
    return result;
  }
}
