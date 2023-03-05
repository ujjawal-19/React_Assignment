import React ,{useState} from "react";
import './IncDecOpertor.css';
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../redux/Count/Action";


const IncDecOpertor = () => {
    const [number , setNumber] = useState(2); 
    const count = useSelector(state => state.count );
    const dispatch_1 = useDispatch(number);
    const dispatch_2 = useDispatch(number);
    return(
        <div className="container">
            <h2>Count:{count}</h2>
             <input type='number' value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={(number)=>dispatch_1(increment(number))}>Increment</button>
            <button onClick={(number)=>dispatch_2(decrement(number))}>Decrement</button>
        </div>
    );
}



export default IncDecOpertor;