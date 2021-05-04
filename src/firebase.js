import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD7i-pnGNVeNDD9iAQyhoxUVHNN3TJ_EKY",
  authDomain: "droom---test.firebaseapp.com",
  databaseURL: "https://droom---test-default-rtdb.firebaseio.com",
  projectId: "droom---test",
  storageBucket: "droom---test.appspot.com",
  messagingSenderId: "1098064259229",
  appId: "1:1098064259229:web:8bba9447176c6a3d044c74",
});

export const auth = app.auth();
export default app;
