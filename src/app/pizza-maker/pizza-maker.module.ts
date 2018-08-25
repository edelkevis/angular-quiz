import { PizzasService } from './services/pizzas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { PizzaSizeComponent } from './pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { PizzaSummaryComponent } from './pizza-summary/pizza-summary.component';
import { PizzaViewerComponent } from './pizza-viewer/pizza-viewer.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    PizzaAppComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaSummaryComponent,
    PizzaViewerComponent
  ],
  exports: [PizzaAppComponent],
  providers: [PizzasService]
})
export class PizzaMakerModule {}
