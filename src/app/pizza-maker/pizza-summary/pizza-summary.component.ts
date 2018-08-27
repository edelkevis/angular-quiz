import {Component, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { PizzasPricesModel } from '../pizza-app/prices.model';

@Component({
  selector: 'pizza-summary',
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['./pizza-summary.component.scss']
})
export class PizzaSummaryComponent {
  @Input() parent: FormGroup;

  @Input() total: string;

  @Input() prices: PizzasPricesModel;
}
