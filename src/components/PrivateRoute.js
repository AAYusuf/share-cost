import React from 'react'
import {Navigate, useLocation, Outlet}   from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";

const PrivateRoute =() => {
    
    const {currentUser} = useAuth()
    const location = useLocation();
    
   
   
    return (
        currentUser? <Outlet/> : <Navigate to="/login" state={{from : location}} replace />

    );
}
export default  PrivateRoute ;
