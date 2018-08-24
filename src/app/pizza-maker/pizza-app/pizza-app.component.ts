import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PizzaValidators} from '../validators/pizza.validators';

@Component({
  selector: 'pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  activePizza = 0;
  total = '0';
  prices = {
    small: { base: 9.99, toppings: 0.69 },
    medium: { base: 12.99, toppings: 0.99 },
    large: { base: 16.99, toppings: 1.29 }
  };
  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.minLength(3)]]
    }, { validator: PizzaValidators.checkEmailsMatch }),
    pizzas: this.fb.array([
      this.createPizza()
    ])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.calculateTotal(this.form.get('pizzas').value);
    this.form.get('pizzas')
      .valueChanges
      .subscribe(this.calculateTotal);
  }

  public createPizza(): FormGroup {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

  public addPizza() {
    const control = this.form.get('pizzas') as FormArray;
    control.push(this.createPizza());
  }

  public removePizza(index: number) {
    const control = this.form.get('pizzas') as FormArray;
    control.removeAt(index);
  }

  public togglePizza(index: number) {
    this.activePizza = index;
  }

  public calculateTotal = (value) => {
    const price = value.reduce((prev: number, next: any) => {
      const p = this.prices[next.size];

      return prev + p.base + (p.toppings * next.toppings.length);
    }, 0);
    this.total = price.toFixed(2);
  }

  public createOrder(order: FormGroup) {
    console.log(order.value);
  }

}
