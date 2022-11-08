import {defineStore} from 'pinia';
import {IFlower} from '@/interfaces/IFlower';

interface State {
    flowers: IFlower[];
}

export const useFlowersStore = defineStore('flowers', {
    state: (): State => ({
        flowers: [
            {
                id: 1,
                img: '@/img/periwinkle.png',
                name: 'Periwinkle',
                price: 7,
                description: 'For the Lord takes delight in His people; He crowns the humble and salvation.',
                favorite: false,
                rate: 0,
                popular: 3
            },
            {
                id: 2,
                img: '@/img/daisy.png',
                name: 'Daisy',
                price: 5,
                description: 'For whatever things were written before were written for our learning, that we through the patience and comfort of the Scriptures might have hope.',
                favorite: false,
                rate: 0,
                popular: 2
            },
            {
                id: 3,
                img: '@/img/sunFlower.png',
                name: 'Sun flower',
                price: 15,
                description: 'Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me; Your rod and Your staff, they comfort me.',
                favorite: false,
                rate: 0,
                popular: 1
            },
            {
                id: 4,
                img: '@/img/whiteRose.png',
                name: 'White Rose',
                price: 20,
                description: 'Then shall the righteous shine forth as the sun in the kingdom of the Father.',
                favorite: false,
                rate: 0,
                popular: 0
            },
        ],
    }),
});

