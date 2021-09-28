import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8LbOi0zEq2dlN_jD9Mgz6wSPxykh4ywE",
  authDomain: "c91---app.firebaseapp.com",
  projectId: "c91---app",
  storageBucket: "c91---app.appspot.com",
  messagingSenderId: "1037845800421",
  appId: "1:1037845800421:web:8358779e96bbc72345bb0c"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   