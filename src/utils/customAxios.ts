import axios, { AxiosRequestConfig } from "axios"

export const customAxios = () => {
    const axiosConfig: AxiosRequestConfig = {
        baseURL: process.env.REACT_APP_SERVER_UR,
    };
    return axios.create(axiosConfig);
}