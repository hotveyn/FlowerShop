import {defineStore} from "pinia";
import {IFlower} from "@/interfaces/IFlower";

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
                popular: 2,
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
                popular: 1,
            },
            {
                id: 4,
                img: "whiteRose.png",
                name: "White Rose",
                price: 20,
                description: "Then shall the righteous shine forth as the sun in the kingdom of the Father.",
                favorite: false,
                rate: 0,
                popular: 6,
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
                popular: 2,
            },
        ],
    }),
    actions: {
        getFlowers(): IFlower[]{
            return this.flowers;
        },
        upFlowerRate(flowerToUpRate: IFlower){
            const flowerToUpRateTemp = this.flowers.filter((value)=>{
                return value === flowerToUpRate;
            });
            flowerToUpRateTemp[0].popular += 1;
        }
    },
});

