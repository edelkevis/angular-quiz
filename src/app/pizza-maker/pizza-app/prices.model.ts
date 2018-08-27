export interface PizzasPricesModel {
  small: PizzaModel;
  medium: PizzaModel;
  large: PizzaModel;
}

export interface PizzaModel {
  size?: string;
  base: number;
  toppings: number;
}
