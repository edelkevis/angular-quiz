import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-in-depth',
  templateUrl: './component-in-depth.component.html',
  styleUrls: ['./component-in-depth.component.css']
})
export class ComponentInDepthComponent implements OnInit {
  public myFirstInterpolation = 'from the controller';
  public imgSrc = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  public nullHero = null;
  public currentHero = {
    id: 0,
    name: 'Hercules',
    emotion: 'happy',
    birthdate: '1970-02-25T08:00:00.000Z',
    url: 'http://www.imdb.com/title/tt0065832/',
    rate: 325
  };
  public disable = true;
  private myPrivateVariable = 'my private variable';
  public twoWays = '';
  public oneWay = 'one way';
  public isSpecial = true;
  public oneWayFlow = 'one flow';
  public currentClasses =  {
    'saveable': true,
    'modified': false,
    'special':  true
  };
  public currentStyles = {
    'font-style':  true      ? 'italic' : 'normal',
    'font-weight': false ? 'bold'   : 'normal',
    'font-size':   true    ? '24px'   : '12px'
  };

  constructor() {}

  ngOnInit() {}

  public getVal(): number {
    return 4;
  }

  public buttonClicked(text) {
    window.alert(text);
  }
}
