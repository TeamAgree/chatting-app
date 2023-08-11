import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

const PublicLayout = () => {
    const accessTokenAtom = useRecoilValue(AccessTokenAtom);
    
    if (accessTokenAtom) return <Navigate to='/workspace/chatList' replace={true} />
    else return <div><Outlet /></div>
    
}

export default PublicLayout;