import React ,{ useState }from 'react';
import AddNewTodo from './components/AddNewTodo';
import Todo from './components/Todo';


function App() {
  let tododata = [
    {
      id : 0,
      data : "Check Mail"
    },
    {
      id : 1,
      data : "Complete the assignment"
    }
  ]

  const [newdata , setData] = useState(tododata);

  const addDataHandler = (data) => {
    const update_data = [data , ...newdata];
    setData(update_data);
  }

  const removeFromArray = (value) => {
  const updatedListData = newdata.filter( element =>  element.data !== value);
  setData(updatedListData);
  }

  
 

  return (
    <div >
      <AddNewTodo  item={newdata} onAddData={addDataHandler} />
    <Todo item={newdata} onRemove={removeFromArray} />  
           
    </div>
  );
}

export default App;
