export type cardState = "unmatched" | "matched" | "selected"
export interface ICard {
    Id:number;
    content:string;
    state: cardState;
}