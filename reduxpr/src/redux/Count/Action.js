import { Increment,Decrement } from "./Constants";

export const increment = () => {
     return {
        type : Increment
     }
}

export const decrement = () => ({
    type: Decrement
})

