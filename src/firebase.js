// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAeSlbvfGytIyARnKvs2n3ybxQo_B0j3c",
  authDomain: "fastfoodwithmonal.firebaseapp.com",
  databaseURL: "https://fastfoodwithmonal-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fastfoodwithmonal",
  storageBucket: "fastfoodwithmonal.appspot.com",
  messagingSenderId: "206673868596",
  appId: "1:206673868596:web:731bd696793129f1985761",
  measurementId: "G-8ZESKFDYHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);