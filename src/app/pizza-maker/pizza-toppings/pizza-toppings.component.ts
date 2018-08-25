import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  ]
})
export class PizzaToppingsComponent implements ControlValueAccessor, OnInit {
  public toppings: string[];
  public value: string[] = [];
  public focused: string;
  private onTouch: Function;
  private onModelChange: Function;

  ngOnInit() {
    this.toppings = this._getAvailablesToppings();
  }

  public registerOnChange(fn) {
    this.onModelChange = fn;
  }

  public registerOnTouched(fn) {
    this.onTouch = fn;
  }

  public writeValue(value) {
    this.value = value;
  }

  public updateTopping(topping: string) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter(this._isDifferentOf(topping));
    } else {
      this.value = [...this.value, ...[topping]];
    }
    this.onModelChange(this.value);
  }

  private _isDifferentOf = (compareValue: string) => (valueFromFilter) => {
    return compareValue !== valueFromFilter;
  }

  public onBlur(value: string) {
    this.focused = '';
  }

  public onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }

  private _getAvailablesToppings(): string[] {
    return [
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
  }
}
