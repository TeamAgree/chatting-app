import { useEffect } from "react";
import { Navigate, Outlet, Route, useLocation, useNavigate } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return <div><Outlet/></div>
}

export default AuthLayout;