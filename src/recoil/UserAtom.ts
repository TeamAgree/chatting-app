import { IUser } from "@typings/db";
import { atom, selector } from "recoil";

export const UserAtom = atom<IUser[]>({
    key: "UserAtom",
    default: []
});

export const UserSelector = selector({
    key: "UserSelector",
    get: async ({ get }) => {
        const user = get(UserAtom);
    }
})