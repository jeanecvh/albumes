// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWRAcyTMGAcTKBsS9UTwFqwUkbUkgLIhk",
    authDomain: "albumnes-facilito-react-45732.firebaseapp.com",
    projectId: "albumnes-facilito-react-45732",
    storageBucket: "albumnes-facilito-react-45732.appspot.com",
    messagingSenderId: "130826608669",
    appId: "1:130826608669:web:bf7b14b78e7909369826f4"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);