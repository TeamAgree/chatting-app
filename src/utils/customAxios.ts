import axios, { AxiosRequestConfig } from "axios"

export const customAxios = async ( method: string, url: string, data: {} | null, accessToken: string | null ) => {
    // AT 값 여기서 불러와서 없으면 로그인으로
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