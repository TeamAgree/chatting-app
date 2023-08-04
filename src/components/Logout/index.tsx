import { UserTokenAtom } from "@recoil/UserTokenAtom";
import { customAxios } from "@utils/customAxios";
import { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const Logout = () => {
    
    const userTokenRecoil = useRecoilValue(UserTokenAtom);
    console.log(userTokenRecoil);
    

    const onLogout = useCallback(() => {
        logoutData();    
    }, [])
    
    const logoutData = async () => {
        const resData = await customAxios('get', '/api/v1/private/user/logout', {}, userTokenRecoil);
        if ( resData?.data.code === "SUCCESS" ) {
            localStorage.removeItem('token')
            return <Navigate to='/login' replace={true} />
        }
        
    }

    return <button onClick={onLogout}>로그아웃</button>
}

export default Logout;