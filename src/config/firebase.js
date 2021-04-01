import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGsQ04aQSVWbbkYhdQVUFJj72U2UbQfIY",
  authDomain: "qfill-a2f0f.firebaseapp.com",
  projectId: "qfill-a2f0f",
  storageBucket: "qfill-a2f0f.appspot.com",
  messagingSenderId: "649543811163",
  appId: "1:649543811163:web:f8cd9c1bf86eb2ac6ebf7e",
  measurementId: "G-C9QR5YWTPF"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
