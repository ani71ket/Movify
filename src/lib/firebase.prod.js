import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBbrwjm8cJoC5LxG4d2ovc8_TemkNkVkgo",
  authDomain: "project1-684f0.firebaseapp.com",
  projectId: "project1-684f0",
  databaseURL: 'https://project1-684f0.firebaseio.com',
  storageBucket: "project1-684f0.appspot.com",
  messagingSenderId: "844022890705",
  appId: "1:844022890705:web:559202f729821ac90385f0"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
