import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SizesModel } from './sizes.model';
import { PizzasService } from '../services/pizzas.service';

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

  constructor(private pizzasService: PizzasService) {}

  ngOnInit() {
    this.pizzasService.getPizzasSizes().subscribe(this._updateAvailableSizes);
  }

  private _updateAvailableSizes = sizesCollection => {
    this.sizes = sizesCollection[0].availablesSizes;
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
}
