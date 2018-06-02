import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsereventExperimentsComponent } from './browserevent-experiments.component';

describe('BrowsereventExperimentsComponent', () => {
  let component: BrowsereventExperimentsComponent;
  let fixture: ComponentFixture<BrowsereventExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsereventExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsereventExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
