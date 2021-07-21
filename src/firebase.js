import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHQDMie3pPU_QOVTfhfCmIbFauryH3AJc",
  authDomain: "new-test-fcc84.firebaseapp.com",
  databaseURL: "https://new-test-fcc84.firebaseio.com",
  projectId: "new-test-fcc84",
  storageBucket: "new-test-fcc84.appspot.com",
  messagingSenderId: "236622791519",
  appId: "1:236622791519:web:a7a54adf80c481ee4c6cea",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
