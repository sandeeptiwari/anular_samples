import { Component, OnInit } from '@angular/core';
import { Lesson } from './../shared/model/lesson';
import * as _ from 'lodash';
import { Observer, store} from './../event-bus-experiment/app-data';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons : Lesson[] = [];

  constructor() {
    console.log("Register LessonList observer");
    store.lessonList$.subscribe(this);
   }

   toggleLessonViewed(lesson:Lesson){
      store.toggleLessonViewed(lesson);
   }

  next(data: Lesson[]) {
    console.log("Received data");
    this.lessons = data;
  }

  delete(deleted:Lesson){
    store.deleteLesson(deleted);
  }
}
