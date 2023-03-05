import React, { Fragment, useState } from 'react';
import './Todo.css';
import TodoList from './TodoList';

const Todo = (props) => {

  return (
    <Fragment>{
        props.item.map((todos) => { return(
            <TodoList 
                       key = {todos.id}
                       id = {todos.id}
                       data = {todos.data}
                       onRemove={props.onRemove}/>
        )} )
      
    }  
    </Fragment>
  );
}

export default Todo;