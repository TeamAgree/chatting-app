import axios, { AxiosRequestConfig } from "axios"

export const customAxios = async ( method: string, url: string, data: {}, accessToken: string | null ) => {
    const getAxiosConfig: AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
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