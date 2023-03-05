import React, { Fragment} from 'react';
import './TodoList.css'

const TodoList = (props) => {
    const removeData = (value) => {
         props.onRemove(value);
    }
   

  return (
    <Fragment >  
            <div className='todo-box'>{props.data}
            <button className='but-del' onClick={() => removeData(props.data)}>Delete</button>
            
            </div>
    </Fragment>
  );
}

export default TodoList;