import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiment/event-bus';
import { Observer } from './../event-bus-experiment/event-bus';
import { Lesson } from './../shared/model/lesson';

@Component({
  selector: 'app-lessons-couter',
  templateUrl: './lessons-couter.component.html',
  styleUrls: ['./lessons-couter.component.css']
})
export class LessonsCouterComponent implements OnInit, Observer {
  
  lessonCounter : number = 0;

  constructor() { 
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify : lessonText => this.lessonCounter += 1
    });
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    this.lessonCounter = data.length;
  }

}
