import { Increment,Decrement } from "./Constants";

export const increment = (number = 2) => {
     return {
        type : Increment,
        payload : number
     }
}

export const decrement = (number = 2) => ({
    type: Decrement,
    payload: number
})

