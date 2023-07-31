import { atom, selector } from "recoil";

export const CartItemAtom = atom({
    key: 'CartItemAtom',
    default: []
});

export const TotalQuantitySelector = selector({
    key: 'TotalQuantitySelector',
    get: ({ get }) => {
        const CartItem = get(CartItemAtom);
        return CartItem.length;
    }
})