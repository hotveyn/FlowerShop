import {IFlowerCart} from "@/interfaces/IFlowerCart";
import {defineStore} from "pinia";
import {IFlower} from "@/interfaces/IFlower";
import {useFlowersStore} from "@/stores/flowers";


interface State {
    flowersInCart: IFlowerCart[];
}

export const useCartStore = defineStore("cart", {
    state: (): State => ({
        flowersInCart: [],
    }),
    actions: {
        addNewFlower(newFlower: IFlower): void {
            const flowerInCart = this.flowersInCart.find((flower) =>
                flower.id === newFlower.id,
            );
            if (flowerInCart) {
                flowerInCart.count += 1;
            } else {
                this.flowersInCart.push({...newFlower, count: 1});
            }
        },
        removeFlower(flowerToRemove: IFlower): void {
            this.flowersInCart = this.flowersInCart.filter((flower) => {
                return flower.id !== flowerToRemove.id;
            });
        },
        changeFlowerCount(flowerToChange: IFlower, mod: "increment" | "decrement"): void {
            const flowerInCart = this.flowersInCart.find((flower) =>
                flower.id === flowerToChange.id,
            );
            if (flowerInCart) {
                if (mod === "increment") {
                    flowerInCart.count++;
                } else if (mod === "decrement") {
                    flowerInCart.count--;
                    if (flowerInCart.count < 1) {
                        this.removeFlower(flowerInCart);
                    }
                }
            }
        },
        buy(): void {
            const flowerStore = useFlowersStore();
            this.flowersInCart.map((flower) => {
                const flowerInBrowse = flowerStore.getById(flower.id);
                flowerStore.upPopular(flowerInBrowse, flower.count);
            });
            this.flowersInCart = [];
        },
    },
    getters: {
        getItems(): IFlowerCart[] {
            return this.flowersInCart;
        },
        getLength(): number {
            return this.flowersInCart.length;
        },
        getTotalPrice(): number {
            let price = 0;
            this.flowersInCart.forEach((i) => {
                price += i.price * i.count;
            });
            return price;
        },
        getUniqFlowerTotalPrice: (state) => {
            return (flowerToGetPrice: IFlower): number | undefined => {
                const flower = state.flowersInCart.find((flower) =>
                    flower.id === flowerToGetPrice.id);
                if (flower) return flower.price * flower.count;
            };
        },
    },
});
