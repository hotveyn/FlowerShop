import {IFlower} from "@/interfaces/IFlower";
import {defineStore} from "pinia";
import {useFlowersStore} from "@/stores/flowers";

type FilterType = "Name" | "Popular" | "Rate" | "Price";

interface State {
    filterMod: FilterType,
    search: string,
    cheep: boolean
}

export const useShopStore = defineStore("shop", {
    state: (): State => ({
        filterMod: "Name",
        search: "",
        cheep: false,
    }),
    actions: {
        setFilterMod(newFilterMod: FilterType): void {
            this.filterMod = newFilterMod;
        },
        setSearch(newSearch: string): void {
            this.search = newSearch;
        },
        setCheep(newCheep: boolean): void {
            this.cheep = newCheep;
        },
        getFlowersByFilterMod(sortMod: FilterType): IFlower[] {
            const flowerStore = useFlowersStore();

            const tempFlowers: IFlower[] = [...flowerStore.flowers];

            // Fix: Говнокод и наплевательское отношение к DRY
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

            return this.cheep ? tempFlowers.reverse() : tempFlowers;
        },
    }
    // Fix: Спросить у Сани есть ли смысл делать геттеры просто для возвращение
    // полня из стора или нет.
});