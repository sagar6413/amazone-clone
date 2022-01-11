import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGaSJ9NEbxJMdkIHTR7NDcNvIjIE1aZt4",
  authDomain: "clone-e1a3b.firebaseapp.com",
  projectId: "clone-e1a3b",
  storageBucket: "clone-e1a3b.appspot.com",
  messagingSenderId: "725190705095",
  appId: "1:725190705095:web:07f5ddeaa91e7a595623e2",
  measurementId: "G-ST1C3G0RB0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dp = firebaseApp.firestore();
const auth = firebase.auth();

export { dp, auth };
