import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PizzaSizesModel } from '../pizza-app/prices.model';

@Component({
  selector: 'pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: PizzaSizesModel;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  submit = new EventEmitter<any>();

  public onAddPizza(event): void {
    this.add.emit(event);
  }

  public onRemovePizza(event): void {
    this.remove.emit(event);
  }

  public onToggle(event): void {
    this.toggle.emit(event);
  }

  public onSubmit(event): void {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }
}
