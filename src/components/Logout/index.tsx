import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import { customAxios } from "@utils/customAxios";
import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Logout = () => {
    const accessTokenAtom = useRecoilValue(AccessTokenAtom);
    const setAccessTokenAtom = useSetRecoilState(AccessTokenAtom);

    const onLogout = useCallback( async () => {

        const resData = await customAxios('get', '/api/v1/private/user/logout', null, accessTokenAtom);
        if ( resData?.data.code === "SUCCESS" ) {
            setAccessTokenAtom('');
        }

    }, [])
    
    return <button onClick={onLogout}>로그아웃</button>
}

export default React.memo(Logout);