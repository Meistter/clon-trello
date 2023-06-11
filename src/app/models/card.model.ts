import { List } from "./list.model";

export interface Card {
    id: string;
    title: string;
    position: number;
    description: string;
    list: List
}