import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowsereventExperimentsComponent } from './browserevent-experiments/browserevent-experiments.component';
import { EventBusExperimentComponent } from './event-bus-experiment/event-bus-experiment.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCouterComponent } from './lessons-couter/lessons-couter.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowsereventExperimentsComponent,
    EventBusExperimentComponent,
    LessonsListComponent,
    LessonsCouterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
