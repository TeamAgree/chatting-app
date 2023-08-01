import axios, { AxiosRequestConfig } from "axios"

export const customAxios = async ( method: string, url: string, data: {} ) => {
    const axiosConfig: AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const res = await axios.request(axiosConfig);
        return res;        
    }
    catch(e) {

    }
}