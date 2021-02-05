import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA21HNkQOxyg_ss3XnwFABFZD-orffXFFk",
  authDomain: "react-app-17e4c.firebaseapp.com",
  projectId: "react-app-17e4c",
  storageBucket: "react-app-17e4c.appspot.com",
  messagingSenderId: "118038603404",
  appId: "1:118038603404:web:df26e688bcce2be51ebda9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
