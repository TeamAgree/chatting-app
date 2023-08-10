import { atom } from "recoil";

type TokenProps = {
    accessToken: string;
}

export const CookieAtom = atom<TokenProps[]>({
    key: "CookieAtom",
    default: []
})