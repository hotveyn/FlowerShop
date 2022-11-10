import {defineStore} from "pinia";
import {IFlower} from "@/interfaces/IFlower";

interface State {
    flowersInCart: IFlower[];
}

export const useCartStore = defineStore("cart", {
    state: (): State => ({
        flowersInCart: [],
    }),
    actions: {
        getCartLength(): number {
            return this.flowersInCart.length;
        },
        addNewFlowerInCart(newFlower: IFlower): void {
            this.flowersInCart.push(newFlower);
        },
        removeFlowerFromCart(flowerToRemove: IFlower): void {
            //Fix: make more optimized
            this.flowersInCart.filter((value) => {
                return value !== flowerToRemove;
            });
        },
    },
});
