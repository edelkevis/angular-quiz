import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.scss']
})
export class PizzaCreatorComponent {
  private visiblePizza = 0;

  @Input()
  pizzas: FormArray;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  get openPizza() {
    return this.visiblePizza;
  }

  set openPizza(index: number) {
    this.visiblePizza = index;

    if (index !== -1) {
      this.toggle.emit(index);
      this.pizzasService.setPizzaSelectedIndex(index);
    }
  }

  constructor(private pizzasService: PizzasService) {}

  public addPizza() {
    this.add.emit();
    this.openPizza = this.pizzas.length - 1;
  }

  public removePizza(index: number) {
    this.remove.emit(index);
    this.openPizza = this.pizzas.length - 1;
  }

  public togglePizza(index: number) {
    if (this.openPizza === index) {
      this.openPizza = -1;
      return;
    }
    this.openPizza = index;
  }
}
