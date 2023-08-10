import { Cookies } from "react-cookie";

type CookieProps = {
    name: string;
    value: string;
    options: any;
}

const cookies = new Cookies();


export const getCookie = (name: string) => {
    return cookies.get(name)
}

export const removeCookie = (name: string) => {
    return cookies.remove(name)
}