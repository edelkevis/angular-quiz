import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaToppingsComponent),
      multi: true
    }
  ],
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  toppings = [
    'anchovy',
    'bacon',
    'basil',
    'chili',
    'mozzarella',
    'mushroom',
    'olive',
    'onion',
    'pepper',
    'pepperoni',
    'sweetcorn',
    'tomato'
  ];

  value: string[] = [];
  focused: string;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  updateTopping(topping: string) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((x: string) => topping !== x);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
