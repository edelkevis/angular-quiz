import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-in-depth',
  templateUrl: './directives-in-depth.component.html',
  styleUrls: ['./directives-in-depth.component.css']
})
export class DirectivesInDepthComponent {
  public color = '';
  public hero = {
    name: 'static hero',
    emotion: 'sad'
  };
  public heroes = [
    { id: 1, name: 'Mr. Nice', emotion: 'happy' },
    { id: 2, name: 'Narco', emotion: 'sad' },
    { id: 3, name: 'Windstorm', emotion: 'confused' },
    { id: 4, name: 'Magneta' }
  ];
  public condition = false;
}
