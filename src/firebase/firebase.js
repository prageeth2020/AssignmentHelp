import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCl1Q0fvc40G1E8Wqmd9nSUZNPuMsQiEPI",
    authDomain: "assignmenthelp-c5e62.firebaseapp.com",
    databaseURL: "https://assignmenthelp-c5e62.firebaseio.com",
    projectId: "assignmenthelp-c5e62",
    storageBucket: "assignmenthelp-c5e62.appspot.com",
    messagingSenderId: "811267489381",
    appId: "1:811267489381:web:a4cfb2759016871ec5908c",
    measurementId: "G-00Z7X3KXP1"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;