import { atom, AtomEffect } from "recoil";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
    (key: string) => 
        ({ setSelf, onSet }) => {

    const savedValaue = localStorage.getItem(key);
    if (savedValaue != null) {
        setSelf(JSON.parse(savedValaue));
    }

    onSet((newValue, _, isReset) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const AccessTokenAtom = atom<string>({
    key: "AccessTokenAtom",
    default: "",
    effects: [
        localStorageEffect<string>('CAAT')
    ]
});


