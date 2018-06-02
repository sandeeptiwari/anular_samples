import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBusExperimentComponent } from './event-bus-experiment.component';

describe('EventBusExperimentComponent', () => {
  let component: EventBusExperimentComponent;
  let fixture: ComponentFixture<EventBusExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBusExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBusExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
