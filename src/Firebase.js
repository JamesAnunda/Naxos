import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAfNxiNd6gBt1nQkGZI1voCdqbAoWVx0l0",
  authDomain: "naxos-8cc1b.firebaseapp.com",
  databaseURL: "https://naxos-8cc1b.firebaseio.com",
  projectId: "naxos-8cc1b",
  storageBucket: "naxos-8cc1b.appspot.com",
  messagingSenderId: "243731443194",
  appId: "1:243731443194:web:e8c613e57b720f59adc843"
};

  firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;