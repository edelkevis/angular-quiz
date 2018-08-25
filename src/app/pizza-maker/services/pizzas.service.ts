import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  private pizzaSelectedIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  public $pizzaSelectedIndex = this.pizzaSelectedIndex.asObservable();

  public setPizzaSelectedIndex(index: number) {
    this.pizzaSelectedIndex.next(index);
  }
}
