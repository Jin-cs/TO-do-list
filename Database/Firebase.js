import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDZLKK_cHRpwpTz6uLUwKI856tzPCZF26c",
    authDomain: "todolist-dc4c4.firebaseapp.com",
    projectId: "todolist-dc4c4",
    storageBucket: "todolist-dc4c4.appspot.com",
    messagingSenderId: "15624706922",
    appId: "1:15624706922:web:7269eda2f7f38c55da6313",
    measurementId: "G-DPCHPBDTG4"
  };

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);