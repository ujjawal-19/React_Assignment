import { Increment,Decrement } from "./Constants";

const initialstate = {count : 10};

const Reduce = (state = initialstate ,action) => {
    if(action.type === Increment){
        return {
            ...state , count : state.count + 1
        }
    }
    else if( action.type === Decrement){
        return {
            ...state , count : state.count - 1
        }
        
    }
    else{
        return state
    }
    
}

export default Reduce;
