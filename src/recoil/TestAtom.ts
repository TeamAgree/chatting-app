import { atom, selector } from "recoil"

export const minuteState = atom({
    key: "minutes",
    default: 0
});

export const hourSelector = selector<number>({
    key: "hours",
    get: ({ get }) => {
        const minutes = get(minuteState) / 60;
        return minutes;
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);

    }
})