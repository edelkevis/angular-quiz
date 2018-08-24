import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  @Input() parent: FormGroup;

  @Input() total: string;

  @Input() prices: any;

  @Output() add = new EventEmitter<any>();

  @Output() remove = new EventEmitter<any>();

  @Output() toggle = new EventEmitter<number>();

  @Output() submit = new EventEmitter<any>();

  onAddPizza(event) {
    this.add.emit(event);
  }

  onRemovePizza(event) {
    this.remove.emit(event);
  }

  onToggle(event) {
    this.toggle.emit(event);
  }

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }
}
