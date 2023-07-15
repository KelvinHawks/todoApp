import React from 'react'

function InputForm({inputedValue, setInputedValue, setListOfTodos, listOfTodos}) {

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
    setInputedValue('')
  }

  return (
    <form>
        <input
         type="text"
         onChange={handleChange}
         value={inputedValue}
         />
        <button onClick={handleSubmit}><i className="fa-solid fa-square-plus"></i></button>
        <select name="" id="">
          <option value="all">All</option>
          <option value="all">complete</option>
          <option value="all">uncomplete</option>
        </select>
    </form>
  )
}

export default InputForm