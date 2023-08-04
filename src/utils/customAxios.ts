import axios, { AxiosRequestConfig } from "axios"

export const customAxios = async ( method: string, url: string, data: {}, token: string | null ) => {
    const getAxiosConfig: AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    
    const pushAxiosConfig: AxiosRequestConfig = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    try {
        const res = await axios.request(method === 'post' ? pushAxiosConfig : getAxiosConfig);        
        return res;
    }
    catch(e) {
        console.error(e);
        
    }
}