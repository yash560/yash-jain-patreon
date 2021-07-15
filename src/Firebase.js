import React from "react";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAh9UCGd_NfzaBJzF2GprcG7FD6Be3BfQk",
  authDomain: "fir-da41e.firebaseapp.com",
  projectId: "fir-da41e",
  storageBucket: "fir-da41e.appspot.com",
  messagingSenderId: "352623399208",
  appId: "1:352623399208:web:787859dbb14a28ba80401d",
  measurementId: "G-Z7BVXY5VME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
