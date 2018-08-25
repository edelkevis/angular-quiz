import { PizzasModel } from './pizzas.model';
import { PizzaSizesModel, PizzaPricesModel } from './prices.model';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { PizzaValidators } from '../validators/pizza.validators';

@Component({
  selector: 'pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  public activePizza = 0;
  public total = '0';
  public prices: PizzaSizesModel;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.prices = this._getPizzaPricesBySizes();
    this.form = this._createPizzaForm();
    this.calculateTotal(this.form.get('pizzas').value);
    this.form.get('pizzas').valueChanges.subscribe(this.calculateTotal);
  }

  public createPizza(): FormGroup {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

  public addPizza(): void {
    const control = this.form.get('pizzas') as FormArray;
    control.push(this.createPizza());
  }

  public removePizza(index: number): void {
    const control = this.form.get('pizzas') as FormArray;
    control.removeAt(index);
  }

  public togglePizza(index: number): void {
    this.activePizza = index;
  }

  public calculateTotal = value => {
    this.total = value.reduce(this._getTotalPriceFromThisPrices, 0).toFixed(2);
  }

  public createOrder(order: FormGroup): void {
    console.log(order.value);
  }

  private _getTotalPriceFromThisPrices = (
    accumulator: number,
    current: PizzasModel
  ) => {
    const price = this.prices[current.size];

    return accumulator + price.base + price.toppings * current.toppings.length;
  }

  private _createPizzaForm(): FormGroup {
    return this.fb.group({
      details: this.fb.group(
        {
          name: ['', Validators.required],
          email: ['', Validators.required],
          confirm: ['', Validators.required],
          phone: ['', Validators.required],
          address: ['', [Validators.required, Validators.minLength(3)]],
          postcode: ['', [Validators.required, Validators.minLength(3)]]
        },
        { validator: PizzaValidators.checkEmailsMatch }
      ),
      pizzas: this.fb.array([this.createPizza()])
    });
  }

  private _getPizzaPricesBySizes(): PizzaSizesModel {
    return {
      small: { base: 9.99, toppings: 0.69 },
      medium: { base: 12.99, toppings: 0.99 },
      large: { base: 16.99, toppings: 1.29 }
    };
  }
}
