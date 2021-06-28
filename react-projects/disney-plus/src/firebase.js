import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDKY45MGqiCludxaHRk-fZ6Spn6otnJE8k",
    authDomain: "disneyplus-a52a0.firebaseapp.com",
    projectId: "disneyplus-a52a0",
    storageBucket: "disneyplus-a52a0.appspot.com",
    messagingSenderId: "976273844202",
    appId: "1:976273844202:web:5a423078a4b3762292b493"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;