import { Component, OnInit } from '@angular/core';
import { Lesson } from './../shared/model/lesson';
import * as _ from 'lodash';
import { Observer, lessonList$ } from './../event-bus-experiment/app-data';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons : Lesson[] = [];

  constructor() {
    console.log("Register LessonList observer");
    lessonList$.subscribe(this);

    // lessonList$.subscribe({
    //     next: lessonText => {
    //       this.lessons.push({
    //         id: Math.random(),
    //         description:lessonText
    //       })
    //     }
    // });
   }

   toggleLessonViewed(lesson:Lesson){
    lesson.complete = !lesson.complete;
   }

  next(data: Lesson[]) {
    console.log("Received data");
    this.lessons = data;
  }

  delete(deleted:Lesson){
    _.remove(this.lessons, lesson => lesson.id === deleted.id );
  }
}
