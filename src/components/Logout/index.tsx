import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import { customAxios } from "@utils/customAxios";
import axios, {AxiosRequestConfig} from "axios";
import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Logout = () => {
    const accessTokenAtom = useRecoilValue(AccessTokenAtom);
    const setAccessTokenAtom = useSetRecoilState(AccessTokenAtom);

    const onLogout = useCallback( async () => {

        if (confirm('로그아웃 하실?')) {
            const getAxiosConfig: AxiosRequestConfig = {
                method: "GET",
                url: `${process.env.PRIVATE_BASE_URL}/user/logout`,
                headers: {
                    'Authorization': `Bearer ${accessTokenAtom}`
                }
            };
            
            try {
                const res = await axios.request(getAxiosConfig);
                if(res.data.code === 100) setAccessTokenAtom('')
                else throw res
            }
            catch (e) {
                console.error(e);
            }
            
        }

    }, [])
    
    return <button onClick={onLogout}>로그아웃</button>
}

export default React.memo(Logout);