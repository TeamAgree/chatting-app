import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import axios, { AxiosRequestConfig } from "axios"
import { useRecoilValue } from "recoil";

export const customAxios = async ( method: string, url: string, data: {} | null ) => {
    // AccessToken 값 여기서 불러와서 없으면 로그인으로
    const ACCESSTOKEN = useRecoilValue(AccessTokenAtom);
    const getAxiosConfig: AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
            'Authorization': `Bearer ${ACCESSTOKEN}`
        }
    };
    
    const postAxiosConfig: AxiosRequestConfig = {
        
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    try {
        const res = await axios.request(method === 'post' ? postAxiosConfig : getAxiosConfig);        
        return res;
    }
    catch(e) {
        console.error(e);
        
    }
}