import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFiveSolutionComponent } from './exercise-five-solution.component';

describe('ExerciseFiveSolutionComponent', () => {
  let component: ExerciseFiveSolutionComponent;
  let fixture: ComponentFixture<ExerciseFiveSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseFiveSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFiveSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
