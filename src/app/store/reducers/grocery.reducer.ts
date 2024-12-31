import { createReducer } from "@ngrx/store";
import { Grocery } from "../../models/grocery.model";

const initialState: Grocery[] = [
    {id: 1, name: 'Milk', type: 'dairy'},
    {id: 2, name: 'Apple', type: 'fruit'},
    {id: 3, name: 'chips', type: 'snacks'},
    {id: 4, name: 'Pepsi', type: 'snacks'}
];

export const groceryReducer = createReducer(initialState);