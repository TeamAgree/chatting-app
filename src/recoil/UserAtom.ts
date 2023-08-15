import { atom, selector } from "recoil";

type UserInfo = {
    id: string;
    name: string;
    pw: number;
    birth: number;
    roles: string;
    chatrooms: [];
    friends: [];
    pushKey: string;
    status: boolean;
}

export const _userInfoTrigger = atom<number>({
    key: "_userInfoTrigger",
    default: 0
});

export const UserInfoAtom = atom<UserInfo[]>({
    key: "UserInfoAtom",
    default: []
})

export const UserSelector = selector({
    key: "UserSelector",
    get: async ({ get }) => {
        get(_userInfoTrigger)
        // const user = await customAxios('get', '/api/v1/private/user', null);

        // return user;
    },
    set: ({ set }) => {
        set(_userInfoTrigger, v => v + 1);
        // userInfoTrigger의 값을 1씩 증가시켜 트리거 발동으로 userInfo 갱신
    }
})