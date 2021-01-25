import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBjE_PJfjPOQj5Z62oYHEzjEXMy8FetW-Q",
    authDomain: "banco-de-dados-queijos.firebaseapp.com",
    projectId: "banco-de-dados-queijos",
    storageBucket: "banco-de-dados-queijos.appspot.com",
    messagingSenderId: "700330184648",
    appId: "1:700330184648:web:5888ea46e92bc029f7fafd",
    measurementId: "G-Y6DHRX9M37"
  };
  
  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);    
  }



const isLogged = () => !!firebase.auth().currentUser;




export {isLogged};