import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "put your key here"
  authDomain: "project1-684f0.firebaseapp.com",
  projectId: "nil",
  databaseURL: 'nil',
  storageBucket: "nil",
  messagingSenderId: "nil",
  appId: "nil"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
