import {defineStore} from "pinia";
import {IFlower} from "@/interfaces/IFlower";

interface State {
    flowersInCart: [IFlower, number][];
}

export const useCartStore = defineStore("cart", {
    state: (): State => ({
        flowersInCart: [],
    }),
    actions: {
        addNewFlower(newFlower: IFlower): void {
            const flowerInCart = this.flowersInCart.find((flower) =>
                flower[0].id === newFlower.id,
            );
            if (flowerInCart) {
                flowerInCart[1] += 1;
            } else {
                this.flowersInCart.push([newFlower, 1]);
            }
        },
        removeFlower(flowerToRemove: IFlower): void {
            this.flowersInCart.filter((flower) => {
                return flower[0].id !== flowerToRemove.id;
            });
        },
        changeFlowerCount(flowerToChange: IFlower, mod: 1 | -1): void {
            const flowerInCart = this.flowersInCart.find((flower) =>
                flower[0].id === flowerToChange.id,
            );
            if(flowerInCart){
                flowerInCart[1] > 0 ? flowerInCart[1] += mod : this.removeFlower(flowerInCart[0]);
            }
        },

    },
    getters: {

        getCartItems(): [IFlower, number][] {
            return this.flowersInCart;
        },
        getCartLength(): number {
            return this.flowersInCart.length;
        },
    },
});
