import React from 'react'
import ToDoItem from './ToDoItem'
function ListOfInputedValue({listOfTodos,  setListOfTodos}) {
  return (
    <div>
      <ul>
        {
          listOfTodos.map((listOfTodo)=> <ToDoItem listOfTodo={listOfTodo} listOfTodos={listOfTodos}  setListOfTodos={ setListOfTodos} />)
        }
      </ul>
      
    </div>
    
  )
}

export default ListOfInputedValue