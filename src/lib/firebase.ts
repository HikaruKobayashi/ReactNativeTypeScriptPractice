import * as firebase from 'firebase';
import 'firebase/firestore';

// 下記は追記が必要
const firebaseConfig: {apiKey:string, authDomain:string, databaseURL:string, projectId:string, storageBucket:string, messagingSenderId:string, appId:string, measurementId:string} = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ":",
  measurementId: ""
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getMessageDocRef = async () => {
  return await firebase.firestore().collection('messages').doc();
}

export const getUserId = async() => {
  const userCredential = await firebase.auth().signInAnonymously();
  return userCredential.user?.uid;
}