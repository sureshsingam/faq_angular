import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Question } from '../../models/Question'
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  // Adding local storage to store list of questions
  questions:Question[];

  // when creating a data service, need to inject the data service in the constructor
  constructor(public dataService:DataService) {
    

   }
   // when the component loads, ngOnInit runs
  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

}
