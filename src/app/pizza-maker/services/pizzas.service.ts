import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { PizzasPricesModel } from '../pizza-app/prices.model';
import { PIZZAS_PRICES } from '../mocks/prices';
import {PIZZA_SIZES} from '../mocks/sizes';
import {PIZZA_TOPPINGS} from '../mocks/toppings';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  private pizzaSelectedIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  public $pizzaSelectedIndex = this.pizzaSelectedIndex.asObservable();
  private pricesCollectionRef: AngularFirestoreCollection<PizzasPricesModel>;

  constructor(private db: AngularFirestore) {
    this.pricesCollectionRef = this.db.collection<PizzasPricesModel>('prices');
  }

  public setPizzaSelectedIndex(index: number): void {
    this.pizzaSelectedIndex.next(index);
  }

  public getPizzasPrices(): Observable<PizzasPricesModel[]> {
    if (environment.enableMockMode) {
      return of([PIZZAS_PRICES]);
    } else {
      return this.pricesCollectionRef.valueChanges();
    }
  }

  public getPizzasSizes(): Observable<any[]> {
    return this._getData('sizes', PIZZA_SIZES);
  }

  public getPizzasToppings(): Observable<any[]> {
    return this._getData('toppings', PIZZA_TOPPINGS);
  }

  private _getData(pathName: string, mockValue: any): Observable<any[]> {
    if (environment.enableMockMode) {
      return of([mockValue]);
    } else {
      return this.db.collection(pathName).valueChanges();
    }
  }
}
