import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByOo2xUdV1RaXcwwMc0hmKZh1w1IOn_uI",
  authDomain: "sns-app-507c8.firebaseapp.com",
  databaseURL: "https://sns-app-507c8.firebaseio.com",
  projectId: "sns-app-507c8",
  storageBucket: "sns-app-507c8.appspot.com",
  messagingSenderId: "928456747036",
  appId: "1:928456747036:web:9d116164e4b524ff6657d9",
  measurementId: "G-Z9K5CSN75E"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getMessageDocRef = async () => {
  return await firebase.firestore().collection('messages').doc();
}