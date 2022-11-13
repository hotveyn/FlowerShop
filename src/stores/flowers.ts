import {IFlower} from "@/interfaces/IFlower";
import {defineStore} from "pinia";

interface State {
    flowers: IFlower[];
}

export const useFlowersStore = defineStore("flowers", {
    state: (): State => ({
        flowers: [
            {
                id: 1,
                img: "periwinkle.png",
                name: "Periwinkle",
                price: 7,
                description: "For the Lord takes delight in His people; He crowns the humble and salvation.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 2,
                img: "daisy.png",
                name: "Daisy",
                price: 5,
                description: "For whatever things were written before were written for our learning, that we through the patience and comfort of the Scriptures might have hope.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 3,
                img: "sunFlower.png",
                name: "Sun flower",
                price: 15,
                description: "Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me; Your rod and Your staff, they comfort me.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 4,
                img: "whiteRose.png",
                name: "White Rose",
                price: 20,
                description: "Then shall the righteous shine forth as the sun in the kingdom of the Father.",
                favorite: false,
                rate: 0,
                popular: 0,
                reviews: [
                    // Сделать ссылкой на единый объект
                    // как в сторе review так и здесть
                    {
                        id: 1,
                        name: "Aneta",
                        description: "i’m buying flower from them every weak, always fresh flowers and beutiful😍🌻... love’em so nuch..keep going 💯💯",
                        stars: 4,
                        img: "atena.png",
                    },
                ],
            },
            {
                id: 5,
                img: "blackWidow.png",
                name: "Black Widow",
                price: 20,
                description: "Even though I walk through the valley of the shadow as the sun in the kingdom of the Father.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 6,
                img: "johnWort.png",
                name: "St. John's Wort",
                price: 20,
                description: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen. ",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 7,
                img: "forgetMeNot.jpg",
                name: "Forget-me-not",
                price: 20,
                description: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 8,
                img: "crownedHellebore.png",
                name: "Crowned hellebore",
                price: 20,
                description: "We must pay the most careful attention, therefore, to what we have heard, so that we do not drift away.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
            {
                id: 9,
                img: "magnoliaLilyflower.png",
                name: "Magnolia lilyflower",
                price: 20,
                description: "Woe to those who call evil good and good evil, who put darkness for light and light for darkness, who put bitter for sweet and sweet for bitter.",
                favorite: false,
                rate: 0,
                popular: 0,
            },
        ],
    }),
    actions: {
        upPopular(flowerToUpRate: IFlower, points: number): void {
            const flowerToUpRateTemp = this.flowers.find((flower) => {
                return flower.id === flowerToUpRate.id;
            });
            if (flowerToUpRateTemp) flowerToUpRateTemp.popular += points;
        },
        makeFavorite(flowerToFavorite: IFlower): void {
            const favoriteFlowerTemp = this.flowers.find((flower) => {
                return flower.id === flowerToFavorite.id;
            });
            if (favoriteFlowerTemp) favoriteFlowerTemp.favorite = !favoriteFlowerTemp.favorite;
        },
    },
    getters: {
        getById: (state) => {
            return (flowerId: number): IFlower => state.flowers.filter((flower) => flower.id === flowerId)[0];
        },
        getFavorites(): IFlower[] {
            return this.flowers.filter((flower) => {
                return flower.favorite;
            });
        },
    },
});

