import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection, AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { PizzasPricesModel } from '../pizza-app/prices.model';
import { PIZZAS_PRICES } from '../mocks/prices';
import {PIZZA_SIZES} from '../mocks/sizes';
import {PIZZA_TOPPINGS} from '../mocks/toppings';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  private pizzaSelectedIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  public $pizzaSelectedIndex = this.pizzaSelectedIndex.asObservable();
  private pricesCollectionRef: AngularFirestoreCollection<PizzasPricesModel>;
  private pricesCollectionRef2: AngularFirestoreDocument<PizzasPricesModel>;

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
      return this.pricesCollectionRef.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PizzasPricesModel;
            const id = a.payload.doc.id;

            return {
              id,
              ...data
            };
          })
        )
      );
    }
  }

  public getPizzasSizes(): Observable<any[]> {
    return this._getData('sizes', PIZZA_SIZES, 'rJKRtjZvplpEX3PfENEg');
  }

  public getPizzasToppings(): Observable<any[]> {
    return this._getData('toppings', PIZZA_TOPPINGS, 'Ji0uITSi9yOb1mNpHSgm');
  }

  private _getData(pathName: string, mockValue: any, id: string): Observable<any> {
    if (environment.enableMockMode) {
      return of([mockValue]);
    } else {
      return this.db.collection(pathName).doc(id).valueChanges();
    }
  }
}
