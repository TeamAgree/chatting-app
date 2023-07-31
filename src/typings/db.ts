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

export interface ILogin {
    id: string;
    password: string | number;
}

export type LoginProps = {
    onSubmit: (
        form: {
            id: string;
            password: string;
        }
    ) => void;
};

export type SignUpProps = {
    id: string;
    pw: string;
    name: string;
    birth: string | number;
};