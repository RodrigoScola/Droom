import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "droom---test.firebaseapp.com",
	databaseURL: "https://droom---test-default-rtdb.firebaseio.com",
	projectId: "droom---test",
	storageBucket: "droom---test.appspot.com",
	messagingSenderId: "1098064259229",
	appId: "1:1098064259229:web:8bba9447176c6a3d044c74",
});

export const auth = getAuth();
export default app;
