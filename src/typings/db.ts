export type IUser = {
    id: string;
    pw: string;
    name: string;
    birth: number;
    status: string;
    roles: string;
    pushKey: null | string;
    friends: null | [];
}

export interface IChatList {
    id: number;
    name: string;
    url: string;
    OwnerId: number;
}

export type UserToken = {
    token: string;
}

export interface LoginProps {
    id: string;
    pw: string;
};

export type SignUpProps = {
    id: string;
    nickName: string;
    pw: string;
    name: string;
    birth: string | number;
};