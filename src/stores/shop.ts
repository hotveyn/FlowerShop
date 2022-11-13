import {IFlower} from "@/interfaces/IFlower";
import {defineStore} from "pinia";
import {useFlowersStore} from "@/stores/flowers";

type SortType = "Name" | "Popular" | "Rate" | "Price";

interface State {
    sortMod: SortType,
    search: string,
    reverse: boolean
}

export const useShopStore = defineStore("shop", {
    state: (): State => ({
        sortMod: "Name",
        search: "",
        reverse: false,
    }),
    actions: {
        setSortMod(newFilterMod: SortType): void {
            this.sortMod = newFilterMod;
        },
        setSearch(newSearch: string): void {
            this.search = newSearch;
        },
        setReverse(newReverse: boolean): void {
            this.reverse = newReverse;
        },
        getFlowersBySortMod(sortMod: SortType): IFlower[] {
            const flowerStore = useFlowersStore();

            const tempFlowers: IFlower[] = [...flowerStore.flowers];

            // Fix: Говнокод и наплевательское отношение к DRY, Сделать геттером
            switch (sortMod) {
                case "Popular":
                    tempFlowers.sort((a, b) => (a.popular < b.popular) ? 1 : ((b.popular < a.popular) ? -1 : 0));
                    break;
                case "Name":
                    tempFlowers.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                    break;
                case "Rate":
                    tempFlowers.sort((a, b) => (a.rate < b.rate) ? 1 : ((b.rate < a.rate) ? -1 : 0));
                    break;
                case "Price":
                    tempFlowers.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
                    break;
            }

            return this.reverse ? tempFlowers.reverse() : tempFlowers;
        },
    },
});
