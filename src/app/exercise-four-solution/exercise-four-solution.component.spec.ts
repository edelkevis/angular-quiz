import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFourSolutionComponent } from './exercise-four-solution.component';

describe('ExerciseFourSolutionComponent', () => {
  let component: ExerciseFourSolutionComponent;
  let fixture: ComponentFixture<ExerciseFourSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseFourSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFourSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
