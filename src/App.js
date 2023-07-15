import React, {useState} from 'react';
import InputForm from './components/InputForm';
import ListOfInputedValue from './components/ListOfInputedValue';
import './App.css';

function App() {
  const[inputedValue, setInputedValue] = useState('')
  const[listOfTodos, setListOfTodos] = useState([])

  
  return (
    <div className="App">
     <InputForm 
      setInputedValue = {setInputedValue}
      inputedValue = {inputedValue}
      setListOfTodos = {setListOfTodos}
      listOfTodos = {listOfTodos}
     />
     <ListOfInputedValue listOfTodos={listOfTodos}  setListOfTodos={ setListOfTodos}/>
    </div>
  );
}

export default App;
