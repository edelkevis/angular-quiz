import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cristian-new-component',
  templateUrl: './cristian-new-component.component.html',
  styleUrls: ['./cristian-new-component.component.css']
})
export class CristianNewComponentComponent {
  public info = {
    name: 'Cristian',
    age: 29,
    birthday: new Date('05/09/1989'),
    ulr: 'https://www.linkedin.com/in/cristian-marquez/'
  };
}
