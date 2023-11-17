import { Navigate } from "react-router-dom";
import { AuthContext } from "../contextss/authContext";
import { useContext, useEffect } from "react";

export default function Logout(){
    const { onLogout } = useContext(AuthContext);

    useEffect(()=>{
        onLogout();
    }, [onLogout]);

    return <Navigate to={'/login'} />
}