import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaRSKRKyfPxTVjYYIP_GumHxTpTLgppOI",
    authDomain: "view-stocks.firebaseapp.com",
    databaseURL: "https://view-stocks.firebaseio.com",
    projectId: "view-stocks",
    storageBucket: "view-stocks.appspot.com",
    messagingSenderId: "367502625412"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  
  export {
    auth,
  };