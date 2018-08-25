import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SizesModel } from './sizes.model';

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
  ]
})
export class PizzaSizeComponent implements ControlValueAccessor, OnInit {
  private onModelChange: Function;
  private onTouch: Function;
  public value: string;
  public focused: string;
  public sizes: SizesModel[];

  ngOnInit() {
    this.sizes = this._getAvailablesPizzaSizes();
  }

  public registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  public registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  public writeValue(value: string) {
    this.value = value;
  }

  public onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

  public onBlur(value: string) {
    this.focused = '';
  }

  public onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }

  private _getAvailablesPizzaSizes(): SizesModel[] {
    return [
      { type: 'large', inches: 13 },
      { type: 'medium', inches: 11 },
      { type: 'small', inches: 9 }
    ];
  }
}
