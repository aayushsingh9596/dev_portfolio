import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5IkTekpE-uEPxWOidKdBfGY4P24qXq08",
  authDomain: "aayushsingh-49e45.firebaseapp.com",
  projectId: "aayushsingh-49e45",
  storageBucket: "aayushsingh-49e45.appspot.com",
  messagingSenderId: "798162484700",
  appId: "1:798162484700:web:e320fd916537bb0678a319",
  measurementId: "G-E6350TF9WC"
};

// Initialize Firebase


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);