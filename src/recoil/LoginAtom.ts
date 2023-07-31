import { atom, selector } from "recoil";

export const LoginAtom = atom({
    key: "LoginAtom",
    default: []
})

export const LoginSelector = selector({
    key: "LoginSelector",
    get: async ({ get }) => {

    },
    set: ({ get, set }) => {

    }
})