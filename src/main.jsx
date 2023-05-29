import React from 'react'
import ReactDOM from 'react-dom/client'
import firebase from "./firebase"
import App from "./components/App";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

console.log(firebase);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
