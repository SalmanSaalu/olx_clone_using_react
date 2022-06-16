
// import {initializeApp} from 'firebase/app'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyAYt2YgLnH-0yXn79Wz9M5d1ncmh-eTHRU",
    authDomain: "olx-clone-9a4f1.firebaseapp.com",
    projectId: "olx-clone-9a4f1",
    storageBucket: "olx-clone-9a4f1.appspot.com",
    messagingSenderId: "997668189132",
    appId: "1:997668189132:web:4a601e2de36ad6fec1a369"
  };

export default firebase.initializeApp(firebaseConfig)
