import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiment/event-bus';
import { Lesson } from './../shared/model/lesson';
import * as _ from 'lodash';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons : Lesson[] = [];

  constructor() {
    console.log("Register LessonList observer");
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
        notify: lessonText => {
          this.lessons.push({
            id: Math.random(),
            description:lessonText
          })
        }
    });
   }

   toggleLessonViewed(lesson:Lesson){
    lesson.complete = !lesson.complete;
   }

  notify(data: Lesson[]) {
    console.log("Received data");
    this.lessons = data;
  }

  delete(deleted:Lesson){
    _.remove(this.lessons, lesson => lesson.id === deleted.id );
  }
}
