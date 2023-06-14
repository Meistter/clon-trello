import { List } from "./list.model";

export interface Card {
    id: string;
    title: string;
    position: number;
    description: string;
    list: List
}

export interface UpdateCardDTO {
    title?: string;
    description?: string;
    position?: number;
    listId?: string;
    boardId?: string;
}