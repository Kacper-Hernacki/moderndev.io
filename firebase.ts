import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getFunctions } from "@firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB1QVbH9wfOen30z1Nw8Q1KZ4SkOe0i6hI",
  authDomain: "moderndev-io.firebaseapp.com",
  projectId: "moderndev-io",
  storageBucket: "moderndev-io.appspot.com",
  messagingSenderId: "652844209496",
  appId: "1:652844209496:web:69ca20d69ff7759976012d",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };