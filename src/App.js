import React, {useEffect, useState} from 'react';
import InputForm from './components/InputForm';
import ListOfInputedValue from './components/ListOfInputedValue';
import './App.css';

function App() {
  const[inputedValue, setInputedValue] = useState('')
  const[listOfTodos, setListOfTodos] = useState([])
  const[filteredItems, setFilteredItems] = useState([])
  const[status, setStatus] = useState('all')


  useEffect(()=>{
    handleFilteredItems()
    console.log(status);
  },[listOfTodos])
  
const handleFilteredItems = ()=>{
  switch(status){
    case 'completed':
      setFilteredItems(listOfTodos.filter(todo=> todo.isCompleted === true))
      break;
      case 'uncompleted':
        setFilteredItems(listOfTodos.filter(todo => todo.isCompleted === false))
        break;
        default:
          setFilteredItems(listOfTodos)
  }
}
  
  return (
    <div className="App">
     <InputForm 
      setInputedValue = {setInputedValue}
      inputedValue = {inputedValue}
      setListOfTodos = {setListOfTodos}
      listOfTodos = {listOfTodos}
      setFilteredItems = {setFilteredItems}
      setStatus = {setStatus}
      handleFilteredItems={handleFilteredItems}
     />
     <ListOfInputedValue listOfTodos={listOfTodos}  setListOfTodos={ setListOfTodos} filteredItems={filteredItems}/>
    </div>
  );
}

export default App;
