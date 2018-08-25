export interface PizzaSizesModel {
  small: PizzaPricesModel;
  medium: PizzaPricesModel;
  large: PizzaPricesModel;
}


export interface PizzaPricesModel {
  size?: string;
  base: number;
  toppings: number;
}
