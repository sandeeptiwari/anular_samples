import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from '../shared/model/test-lesson';
import { Lesson } from './../shared/model/lesson';

@Component({
  selector: 'app-event-bus-experiment',
  templateUrl: './event-bus-experiment.component.html',
  styleUrls: ['./event-bus-experiment.component.css']
})
export class EventBusExperimentComponent implements OnInit {
  lessons : Lesson[] = [];
  constructor() { 
  }

  ngOnInit() {
    console.log("Top level component broadcast all lessons");
    this.lessons = testLessons.slice(0);
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

    setTimeout( () => {
      this.lessons.push({
        id: Math.random(),
        description:"New lessone arriving from the backend "+Math.random()
      })

      globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

    }, 10000);
  }

  addLesson(lessonTxt:string, target:any){
    console.log("Lesson Name "+lessonTxt);
    target.value = "";
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonTxt);
  }

}
