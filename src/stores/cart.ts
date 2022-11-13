import {defineStore} from "pinia";
import {IFlower} from "@/interfaces/IFlower";
import {useFlowersStore} from "@/stores/flowers";

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
            this.flowersInCart = this.flowersInCart.filter((flower) => {
                return flower[0].id !== flowerToRemove.id;
            });
        },
        changeFlowerCount(flowerToChange: IFlower, mod: 1 | -1): void {
            const flowerInCart = this.flowersInCart.find((flower) =>
                flower[0].id === flowerToChange.id,
            );
            if (flowerInCart) {
                flowerInCart[1] !== 1 || mod !== -1 ?
                    flowerInCart[1] += mod : this.removeFlower(flowerInCart[0]);
            }
        },
        buy(): void {
            const flowerStore = useFlowersStore();
            this.flowersInCart.map((flower) => {
                const flowerInBrowse = flowerStore.getById(flower[0].id);
                flowerStore.upPopular(flowerInBrowse, flower[1]);
            });
            this.flowersInCart = [];
        },
    },
    getters: {
        getItems(): [IFlower, number][] {
            return this.flowersInCart;
        },
        getLength(): number {
            return this.flowersInCart.length;
        },
        getTotalPrice(): number {
            let price = 0;
            this.flowersInCart.forEach((i) => {
                price += i[0].price * i[1];
            });
            return price;
        },
        getUniqFlowerTotalPrice: (state) => {
            return (flowerToGetPrice: IFlower): number | undefined => {
                const flower = state.flowersInCart.find((flower) =>
                    flower[0].id === flowerToGetPrice.id);
                if (flower) return flower[0].price * flower[1];
            };
        },
    },
});
