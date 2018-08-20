import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyMaterialNavComponent } from './my-material-nav/my-material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DearPuppyComponent } from './dear-puppy/dear-puppy.component';
import { ComponentInDepthComponent } from './component-in-depth/component-in-depth.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'dear-puppy', component: DearPuppyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyMaterialNavComponent,
    FirstComponent,
    SecondComponent,
    DearPuppyComponent,
    ComponentInDepthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
