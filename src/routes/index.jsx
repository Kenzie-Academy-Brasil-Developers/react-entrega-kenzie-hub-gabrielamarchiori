import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Signup from "../pages/signup";
import Login from "../pages/login";

const ToAuthenticate = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect (() => {
        const token = window.localStorage.getItem("authToken");

        if(!token) {
            setIsAuthenticated(false)
        }
    })

    if(isAuthenticated) {

        return (
            <Routes>
                <Route path="/dashboard" element={<Dashboard setIsAuthenticated={setIsAuthenticated}/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        )
    }
}

export default ToAuthenticate

