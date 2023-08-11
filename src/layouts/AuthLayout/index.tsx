import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

const AuthLayout = () => {
    const accessTokenAtom = useRecoilValue(AccessTokenAtom);
    
    if(!accessTokenAtom) return <Navigate to='/login' replace={true} />
    else return <div><Outlet/></div>
}

export default AuthLayout;