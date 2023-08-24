import axios from "axios";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { AccessTokenAtom } from "./AccessTokenAtom";

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

// export const UserInfoAtom = atom<UserInfo[]>({
//     key: "UserInfoAtom",
//     default: []
// })

export const UserSelector = selector({
    key: "UserSelector",
    get: async ({ get }) => {
        get(_userInfoTrigger);

        const AccessToken = useRecoilValue(AccessTokenAtom);
        
        const res = await axios.get('/api/v1/private/user', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AccessToken}`
            }
        });

        return res.data;
        
    },
    set: ({ set }) => {
        set(_userInfoTrigger, v => v + 1);
        // userInfoTrigger의 값을 1씩 증가시켜 트리거 발동으로 userInfo 갱신
    }
})