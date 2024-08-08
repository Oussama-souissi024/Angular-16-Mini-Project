import { RatingRepresentation } from "./rating-representation";

export interface ProductRepresentation{
    category? : string,
    description? : string,
    id? : string,
    image? : string,
    price? : number,
    title? : string,
    rating? : RatingRepresentation
}