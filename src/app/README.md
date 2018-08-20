# 2. Components

## Exercise 1
1. Fork the course project.
2. Create a new component without the angular-cli. name it with your name eg: CristianNewComponent.
3. Create an object with your personal information: name, age, birthday and a social network url.
4. Use the angular material card to display the information.
5. Create a pull request and solve the comments.

# 1. Introduction

## Exercise 3
Use the angular-cli to generate the app navegation

1. Add the Import rule for the router: `{ RouterModule Routes }` from `@angular/router`.
2. Add the Router configuration.
```
const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'dear-puppy', component: DearPuppyComponent }
];
```
3. Register the router in the module: `RouterModule.forRoot(appRoutes)`.
4. Add the router tag in the app `<router-outlet></router-outlet>`.
5. Update the navigation links
```
<mat-nav-list>
  <a mat-list-item routerLink="/first-page">First Page</a>
  <a mat-list-item routerLink="/second-page">Second Page</a>
  <a mat-list-item routerLink="/dear-puppy">Dear Puppy</a>
</mat-nav-list>
```
6. Generate the required componentes with the angular-cli>
```
$ ng generate component First
$ ng generate component Second
$ ng generate component DearPuppy
```

## Exercise 2

Use the angular-cli to generate angular material components.

1. Add material angular to the project using the angular-cli: `ng add @angular/material`.
2. Add the navigation component: `ng generate @angular/material:material-nav --name myMaterialNav`.
3. Add the component to our main app `<app-my-material-nav></app-my-material-nav>`.
4. Put the code from the last exercise in the right place.

## Exercise 1

Use the card component provide for Material Angular [MatCard](https://material.angular.io/components/card/overview).

1. Import the `MatCardModule` module.
2. Replace the content of the file `app.component.html` with the code provide in the example.
3. Import material button module.
4. Add missing css styles.
