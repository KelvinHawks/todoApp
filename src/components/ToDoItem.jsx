import React from 'react'
import './todoitem.css'
function ToDoItem({listOfTodo, listOfTodos,  setListOfTodos }) {
  //delete Item
  const handleComplete =()=>{
    setListOfTodos(listOfTodos.map((items)=>{
      if(items.id === listOfTodo.id){
        return{
          ...items,
          isCompleted: !items.isCompleted
        }
          
      }
      return items
    }))
    
  }

  const handleDelete = ()=>{
    setListOfTodos(listOfTodos.filter((el)=> el.id !== listOfTodo.id))
  }
  
  return (
    <div className='display-flex'>
        <li className={`todo ${listOfTodo.isCompleted ? 'completed' : ''}`}>{listOfTodo.item}</li>
        <button onClick={handleComplete} ><i className="fa-solid fa-square-check" ></i></button>
        <button onClick={handleDelete}> <i className="fa-solid fa-trash"></i></button>
       
    </div>
  )
}

export default ToDoItem