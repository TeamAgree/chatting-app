export type IUser = {
    id: string;
    name: string;
    birth: number;
    // chatList: IChatList[]
}

export interface IChatList {
    id: number;
    name: string;
    url: string;
    OwnerId: number;
}

export type IsLogin = {
    token: string;
}

export interface LoginProps {
    id: string;
    pw: string;
};

export type SignUpProps = {
    id: string;
    pw: string;
    name: string;
    birth: string | number;
};