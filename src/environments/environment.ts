// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'mock-recipe',
    appId: '1:609816542264:web:6d38d4b8d8c6b8230d7acd',
    databaseURL: 'https://mock-recipe-default-rtdb.firebaseio.com',
    storageBucket: 'mock-recipe.appspot.com',
    apiKey: 'AIzaSyCvkE7KIo40JZyF9_wY3xu7HAcdrujJdWQ',
    authDomain: 'mock-recipe.firebaseapp.com',
    messagingSenderId: '609816542264',
    measurementId: 'G-9HPPHS2G8M',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvkE7KIo40JZyF9_wY3xu7HAcdrujJdWQ",
  authDomain: "mock-recipe.firebaseapp.com",
  databaseURL: "https://mock-recipe-default-rtdb.firebaseio.com",
  projectId: "mock-recipe",
  storageBucket: "mock-recipe.appspot.com",
  messagingSenderId: "609816542264",
  appId: "1:609816542264:web:6d38d4b8d8c6b8230d7acd",
  measurementId: "G-9HPPHS2G8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);