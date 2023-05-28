import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import firebase from "./firebase"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

console.log(firebase);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
