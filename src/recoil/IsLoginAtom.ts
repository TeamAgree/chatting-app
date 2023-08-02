import { IsLogin } from "@typings/db";
import { atom } from "recoil";

export const IsLoginAtom = atom<string>({
    key: "IsLogin",
    default: ""
});