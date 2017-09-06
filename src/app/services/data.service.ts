import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [{
      text:'What is your name',
      answer:'My name is Brad',
      hide:true
    },
    {
      text:'What is your favourite color',
      answer:'My favourite color is red',
      hide:true
    },
    {
      text:'What is your favourite language',
      answer:'My favourite language is Python',
      hide:true
    }

  
  ];

  }

  getQuestions(){
    return this.questions;
  }

}
