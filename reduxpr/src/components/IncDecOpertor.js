import React  from "react";
import './IncDecOpertor.css';
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../redux/Count/Action";


const IncDecOpertor = () => {
    const count = useSelector(state => state.count );
    const dispatch_1 = useDispatch();
    const dispatch_2 = useDispatch();
    return(
        <div className="container">
            <h2>Count:{count}</h2>
            <button onClick={()=>dispatch_1(increment())}>Increment</button>
            <button onClick={()=>dispatch_2(decrement())}>Decrement</button>
        </div>
    );
}



export default IncDecOpertor;
