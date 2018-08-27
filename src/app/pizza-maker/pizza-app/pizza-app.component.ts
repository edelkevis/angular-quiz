import { Observable } from 'rxjs';
import { PizzasModel } from './pizzas.model';
import { PizzasPricesModel } from './prices.model';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { PizzaValidators } from '../validators/pizza.validators';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  public activePizza = 0;
  public total = '0';
  public prices: PizzasPricesModel;
  public pricesAreReady = false;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private pizzasService: PizzasService) {}

  ngOnInit() {
    this.pizzasService.getPizzasPrices().subscribe(this._initalizePizzaAppComponent);
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

  private _initalizePizzaAppComponent = (pizzasPricesCollection) => {
    this.prices = pizzasPricesCollection[0];
    this.pricesAreReady = true;
    this._initializePizzaForm();
  }

  private _initializePizzaForm() {
    this.form = this._createPizzaForm();
    this.calculateTotal(this.form.get('pizzas').value);
    this.form.get('pizzas').valueChanges.subscribe(this.calculateTotal);
  }
}
