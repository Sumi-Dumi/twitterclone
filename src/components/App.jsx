
import "../reset.css"
import React from "react";
import AppRouter from './Router';
import { useState } from "react"


function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(true);
  return <AppRouter />
}
export default App;
