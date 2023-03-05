import { Increment,Decrement } from "./Constants";

const initialstate = {count : 10};

const Reduce = (state = initialstate ,action) => {
    if(action.type === Increment){
        return {
            ...state , count : state.count + new Number(action.payload)
        }
    }
    else if( action.type === Decrement){
        {
            console.log(action.payload)
        }
        
    }
    else{
        return state
    }
    
}

export default Reduce;