import React from 'react'

function InputForm({inputedValue, setInputedValue, setListOfTodos, listOfTodos, setStatus, handleFilteredItems}) {

  const handleChange = (e)=>{
    setInputedValue(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setListOfTodos(()=> 
      [
        ...listOfTodos,
        {
          item: inputedValue,
          isCompleted: false,
          id: Math.floor(Math.random()*1000)
        }
      ]
  )
  
  }
const filterHandler = (e)=>{
  setStatus(e.target.value);
}
  return (
    <form>
        <input
         type="text"
         onChange={handleChange}
         value={inputedValue}
         />
        <button onClick={handleSubmit}><i className="fa-solid fa-square-plus"></i></button>
        <select name="listOfTodos" onChange={filterHandler} >
          <option value="all">All</option>
          <option value="complete">complete</option>
          <option value="uncomplete">uncomplete</option>
        </select>
    </form>
  )
}

export default InputForm