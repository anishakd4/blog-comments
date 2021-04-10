import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAyBpAehrHyZp2xNGqtlagN2DkB1vNAQWo",
    authDomain: "anishvision-1daeb.firebaseapp.com",
    databaseURL: "https://anishvision-1daeb.firebaseio.com",
    projectId: "anishvision-1daeb",
    storageBucket: "anishvision-1daeb.appspot.com",
    messagingSenderId: "823405812865",
    appId: "1:823405812865:web:92546caadac1d2f17d0180",
    measurementId: "G-YXWLSPEK22"
  };

// var firebaseConfig = 'yourFirebaseConfig'

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase