import React, { Fragment, useState } from 'react';
import './AddNewTodo.css';

const AddNewTodo = (props) => {

const [newdata , setData] = useState(props.tododata);

const dataChangeHandler = (event) => {
    setData(event.target.value);
}

const addData = () => {
    let new_list = {
                    id : props.item.length, 
                    data : newdata};
    props.onAddData(new_list);
    setData('');
}

  return (
    
        <div className="new-data__controls">
                <div className="new-data__control">
                    <input type="text" value={newdata} onChange={dataChangeHandler}/>
                </div>
                
                <button type="submit" className='new-data__actions' onClick={addData}> Add New Todo</button>
            
        </div>
    
  );
}

export default AddNewTodo;


