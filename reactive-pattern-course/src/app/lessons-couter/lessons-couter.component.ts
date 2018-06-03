import { Component, OnInit } from '@angular/core';
import { Lesson } from './../shared/model/lesson';
import { Observer, store} from './../event-bus-experiment/app-data';

@Component({
  selector: 'app-lessons-couter',
  templateUrl: './lessons-couter.component.html',
  styleUrls: ['./lessons-couter.component.css']
})
export class LessonsCouterComponent implements OnInit, Observer {
  
  lessonCounter : number = 0;

  constructor() { 
    store.lessonList$.subscribe(this);
    
  }

  ngOnInit() {
  }

  next(data: Lesson[]) {
    this.lessonCounter = data.length;
  }

}
