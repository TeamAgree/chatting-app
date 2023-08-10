import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicLayout = () => {

    const { pathname } = useLocation();

    if (pathname === "/") {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicLayout;