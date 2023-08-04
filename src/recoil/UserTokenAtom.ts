import { UserToken } from "@typings/db";
import { atom } from "recoil";

export const UserTokenAtom = atom<string>({
    key: "UserToken",
    default: ""
});