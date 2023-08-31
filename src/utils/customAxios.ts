import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import axios, { AxiosRequestConfig } from "axios"
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const customAxios = async (url: string, method: string, data: {} | null) => {
    // AccessToken 값 여기서 불러와서 없으면 로그인으로
    const ACCESSTOKEN = useRecoilValue(AccessTokenAtom);
    const getAxiosConfig: AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
            'Authorization': `Bearer ${ACCESSTOKEN}`,
            'Content-Type': 'application/json'
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
        await axios.request(
            method === 'post' ?
                postAxiosConfig
                : getAxiosConfig
        )
        .then(
            res => res
        )
        .catch(
            error => {
                throw error
            }
            
        )
    }
    catch(e) {
        console.error(e);

    }
}