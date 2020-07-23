import React, { useState, useReducer} from 'react';
import {listReducer, initialToDoState} from './reducers/reducerIndex';
import './App.css';

function App() {
  const [newToDo, setNewToDo] = useState('');
  const [state, dispatch] = useReducer(listReducer, initialToDoState);

  const handleChanges = e => {
    setNewToDo(e.target.value)
  }

  console.log('state', state)

  return (
    <div className="App">
      <input 
      placeholder='New Task'
      type='text'
      name='newListItem'
      onChange={handleChanges}
      value={newToDo}
      />

      <button
        onClick={ () => dispatch({type: 'ADD_TODO', payload: {
          task: newToDo,
          id: Date.now(),
          complete: false}
        })}
        >
        Add Task
      </button>

      {state.listItems.map(item => (
        <li key={item.id}
        >{item.task}</li>
      ))}
    </div>
  );
}

export default App;
