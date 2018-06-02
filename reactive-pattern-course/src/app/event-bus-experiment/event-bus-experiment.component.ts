import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
import { testLessons } from '../shared/model/test-lesson';

@Component({
  selector: 'app-event-bus-experiment',
  templateUrl: './event-bus-experiment.component.html',
  styleUrls: ['./event-bus-experiment.component.css']
})
export class EventBusExperimentComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log("Top level component broadcast all lessons");
    globalEventBus.notifyObservers(testLessons);
  }

  addLesson(lesson:string, target:any){
    console.log("Lesson Name "+lesson)
    target.value = "";
  }

}
