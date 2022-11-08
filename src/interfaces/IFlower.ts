import {IReview} from "@/interfaces/IReview";

export interface IFlower {
    id: number,
    img: string,
    name: string,
    price: number,
    description: string,
    favorite: boolean,
    rate: number,
    popular: number,
    reviews?: IReview[]
}