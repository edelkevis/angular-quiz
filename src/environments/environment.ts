// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBTP4uW4MN-ZEN3dOm5w0ojVdBkeY9Tzus',
    authDomain: 'pizza-maker-2d9ed.firebaseapp.com',
    databaseURL: 'https://pizza-maker-2d9ed.firebaseio.com',
    projectId: 'pizza-maker-2d9ed',
    storageBucket: 'pizza-maker-2d9ed.appspot.com',
    messagingSenderId: '404824001930'
  },
  enableMockMode: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
