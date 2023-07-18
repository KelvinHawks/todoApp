import React from 'react'
import ToDoItem from './ToDoItem'
function ListOfInputedValue({setListOfTodos, filteredItems, listOfTodos}) {
  return (
    <div>
      <ul>
        {
          filteredItems.map((listOfTodo)=> <ToDoItem listOfTodo={listOfTodo} listOfTodos={listOfTodos}  setListOfTodos={ setListOfTodos} />)
        }
      </ul>
      
    </div>
    
  )
}

export default ListOfInputedValue