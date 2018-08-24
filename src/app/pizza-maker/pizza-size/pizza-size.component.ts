import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./pizza-size.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaSizeComponent),
      multi: true
    }
  ],
})
export class PizzaSizeComponent implements ControlValueAccessor {
  private onModelChange: Function;
  private onTouch: Function;

  value: string;
  focused: string;

  sizes: any[] = [{ type: 'large', inches: 13 }, { type: 'medium', inches: 11 }, { type: 'small', inches: 9 }];

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
