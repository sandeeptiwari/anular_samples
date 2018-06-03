import { Component, OnInit } from '@angular/core';
import { testLessons } from '../shared/model/test-lesson';
import { Lesson } from './../shared/model/lesson';
import { store } from './app-data';

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
    store.initializeLessonList(testLessons.slice(0))

    setTimeout( () => {
      const newList = {
        id: Math.random(),
        description:"New lessone arriving from the backend "+Math.random()
      }
      store.addLesson(newList);
    }, 10000);
  }

  addLesson(lessonTxt:string, target:any){
    console.log("Lesson Name "+lessonTxt);
    target.value = "";
    const newLesson = {
      id: Math.random(),
      description:lessonTxt
    }
    store.addLesson(newLesson);
  }

}
