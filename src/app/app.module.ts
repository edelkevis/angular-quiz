import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyMaterialNavComponent } from './my-material-nav/my-material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DearPuppyComponent } from './dear-puppy/dear-puppy.component';
import { ComponentInDepthComponent } from './component-in-depth/component-in-depth.component';
import { CristianNewComponentComponent } from './cristian-new-component/cristian-new-component.component';
import { ExerciseFourSolutionComponent } from './exercise-four-solution/exercise-four-solution.component';
import { DirectivesInDepthComponent } from './directives-in-depth/directives-in-depth.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightMouseDirective } from './directives/highlight-mouse.directive';
import { HighlightColorDirective } from './directives/highlight-color.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ExerciseFiveSolutionComponent } from './exercise-five-solution/exercise-five-solution.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'dear-puppy', component: DearPuppyComponent },
  { path: 'cristian', component: CristianNewComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyMaterialNavComponent,
    FirstComponent,
    SecondComponent,
    DearPuppyComponent,
    ComponentInDepthComponent,
    CristianNewComponentComponent,
    ExerciseFourSolutionComponent,
    DirectivesInDepthComponent,
    HighlightDirective,
    HighlightMouseDirective,
    HighlightColorDirective,
    UnlessDirective,
    ExerciseFiveSolutionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
