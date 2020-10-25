import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAbqhU3sHnIQRKc7hNp2FCC9pAzwzVDhz8",
    authDomain: "chatapp-8cdf0.firebaseapp.com",
    databaseURL: "https://chatapp-8cdf0.firebaseio.com",
    projectId: "chatapp-8cdf0",
    storageBucket: "chatapp-8cdf0.appspot.com",
    messagingSenderId: "108310531878",
    appId: "1:108310531878:web:a713505336e19472113be7",
    measurementId: "G-D6YLHXTMQM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
//   GoogleAuthProvider();

  export {auth, provider};
  export default db;