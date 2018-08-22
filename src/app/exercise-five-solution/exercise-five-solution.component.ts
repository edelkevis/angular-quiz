import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-five-solution',
  templateUrl: './exercise-five-solution.component.html',
  styleUrls: ['./exercise-five-solution.component.css']
})
export class ExerciseFiveSolutionComponent {
  public heroes = [
    { id: 1, name: 'Mr. Nice', emotion: 'happy' },
    { id: 2, name: 'Narco', emotion: 'sad' },
    { id: 3, name: 'Windstorm', emotion: 'confused' },
    { id: 4, name: 'Magneta' }
  ];
  public showConfused = true;
}
