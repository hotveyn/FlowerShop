import {defineStore} from "pinia";
import {IReview} from "@/interfaces/IReview";

interface State {
    reviews: IReview[];
}


export const useReviewStore = defineStore("review", {
    state: (): State => ({
        reviews: [
            {
                id: 1,
                name: "Aneta",
                description: "i’m buying flower from them every weak, always fresh flowers and beutiful😍🌻... love’em so nuch..keep going 💯💯",
                stars: 4,
                img: "atena.png",
            },
            {
                id: 2,
                name: "Hans",
                description: "Сидит медведь в машине, вдруг видит - снег пошел. Что за херня - подумал медведь, вышел из машины и замерз. 🔥💯",
                stars: 5,
                img: "hans.png",
            },
            {
                id: 3,
                name: "Niga",
                description: "The secret of success is simple, but it is a secret",
                stars: 4,
                img: "niga.png",
            },
            {
                id: 4,
                name: "Liza",
                description: "Only when the sweets of pleasures have flooded the sinner's mouth to the brim will midnight come, and the sound of the bells ring, turning him into a delight for the devil within him.",
                stars: 5,
                img: "emily.png",
            },
        ],
    }),
    actions: {
        getReviews() {
            return this.reviews;
        },
    },
});