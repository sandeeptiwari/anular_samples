import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsCouterComponent } from './lessons-couter.component';

describe('LessonsCouterComponent', () => {
  let component: LessonsCouterComponent;
  let fixture: ComponentFixture<LessonsCouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsCouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsCouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
