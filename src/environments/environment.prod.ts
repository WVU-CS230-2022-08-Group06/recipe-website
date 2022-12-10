export const environment = {
  firebase: {
  apiKey: "AIzaSyCvkE7KIo40JZyF9_wY3xu7HAcdrujJdWQ",
  authDomain: "mock-recipe.firebaseapp.com",
  databaseURL: "https://mock-recipe-default-rtdb.firebaseio.com",
  projectId: "mock-recipe",
  storageBucket: "mock-recipe.appspot.com",
  messagingSenderId: "609816542264",
  appId: "1:609816542264:web:6d38d4b8d8c6b8230d7acd",
  measurementId: "G-9HPPHS2G8M"
  },
  production: true,
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app);

auth.onAuthStateChanged(users => {
  console.log(users);
})
const analytics = getAnalytics(app);
