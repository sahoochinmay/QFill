import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjbnVLAwGn9A2K8WtwDA3HImHQomhlNh8",
  authDomain: "e-barnali.firebaseapp.com",
  projectId: "e-barnali",
  storageBucket: "e-barnali.appspot.com",
  messagingSenderId: "555633833270",
  appId: "1:555633833270:web:db2d48552e8cafa226ef97",
  measurementId: "G-XFNBPYX9BP",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
