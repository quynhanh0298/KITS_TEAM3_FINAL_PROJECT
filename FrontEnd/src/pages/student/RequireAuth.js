import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentTokens,selectCurrentToken } from "features/auth/authSlice"
import { useRef, useState, useEffect } from 'react'


const RequireAuth = () => {
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the token is present in local storage
        const token = localStorage.getItem('token');
        console.log("Login? : " + !!token);
        setIsLoggedIn(!!token); // Update isLoggedIn based on token presence
      }, []);

    return (
        isLoggedIn
        ? <Outlet />
        : <Navigate replace to="/login-page" />
    )
}
export default RequireAuth