import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7-EGQyZ2kJdH0ldCzxt3-aTS5jpa8OY8",
  authDomain: "naxos-e0d25.firebaseapp.com",
  databaseURL: "https://naxos-e0d25.firebaseio.com",
  projectId: "naxos-e0d25",
  storageBucket: "naxos-e0d25.appspot.com",
  messagingSenderId: "873572319319",
  appId: "1:873572319319:web:a06c5488e284573a016312"
};

  firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;