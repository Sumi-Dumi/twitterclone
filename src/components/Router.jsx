
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Auth from "../routes/Auth"
import Home from "../routes/Home"

const AppRouter = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                {isLoggedIn ? 
                <>
                    <Route path ="/" element={<Home />} />
                </> 
                : <Route path="/" element={<Auth />} />}
            
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;