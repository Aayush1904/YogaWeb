// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHzMzup2kINbTavXQ4ykcWLcBL7YVvzQ0",
  authDomain: "yoga-5c9b0.firebaseapp.com",
  projectId: "yoga-5c9b0",
  storageBucket: "yoga-5c9b0.appspot.com",
  messagingSenderId: "858977274144",
  appId: "1:858977274144:web:205a8ea19e354a7b0b2f45",
  measurementId: "G-KS1FN3DCKD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);