import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDgMFl5tjFY8xdlWPBOM5SOnlqTlEYhCUQ',
  authDomain: 'ride-router.firebaseapp.com',
  databaseURL: 'https://ride-router.firebaseio.com',
  projectId: 'ride-router',
  storageBucket: 'ride-router.appspot.com',
  messagingSenderId: '810028332073',
  appId: '1:810028332073:web:7177b8ee45505868535838',
  measurementId: 'G-KVJ03KBCRR'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;


