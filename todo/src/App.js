import React, { useState, useReducer} from 'react';
import {listReducer, initialToDoState} from './reducers/reducerIndex';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(listReducer, initialToDoState);
  console.log('state from app', state)
  return (
    <div className="App">
      <input placeholder='New Task'></input>
      <button>Add Task</button>
      {state.listItems.map(item => (
        <li key={item.id}>{item.task}</li>
      ))}
    </div>
  );
}

export default App;
