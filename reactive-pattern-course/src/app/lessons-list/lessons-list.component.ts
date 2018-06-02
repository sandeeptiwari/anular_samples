import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus-experiment/event-bus';
import { Lesson } from './../shared/model/lesson';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit,Observer {

  lessons : Lesson[] = [];

  constructor() {
    console.log("Register LessonList observer");
    globalEventBus.registerObserver(this);
   }

  ngOnInit() {
    

  }

  notify(data: Lesson[]) {
    console.log("Received data");
    this.lessons = data;
  }

}
