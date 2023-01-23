import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAg6SSCh9Xz8fR4X_9Ctu7zo2GnpmaJ1Po",
    authDomain: "notes-app-cd4b7.firebaseapp.com",
    databaseURL: "https://notes-app-cd4b7.firebaseio.com",
    projectId: "notes-app-cd4b7",
    storageBucket: "",
    messagingSenderId: "421055745701",
    appId: "1:421055745701:web:2ede6027e488fee7"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Kind of like a model, its the object the communicates with firebase
const database = firebase.database();

export default database;
