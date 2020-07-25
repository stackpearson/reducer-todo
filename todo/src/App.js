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
      <div>
        <input className='button'
        placeholder='New Task'
        type='text'
        name='newListItem'
        onChange={handleChanges}
        value={newToDo}
      />
      </div>
  

      <div className='button add-button'
        onClick={ () => dispatch({type: 'ADD_TODO', payload: {
          task: newToDo,
          id: Date.now(),
          complete: false}
        })}
        >
        Add Task
      </div>
      
      <div className='list-container'>
      {state.listItems.map(item => (
        <li key={item.id}
        onClick={ () => dispatch({type: 'TOGGLE_COMPLETE', payload: item.id})}
        className={`to-do-item${item.complete ? ' complete': ''}`}
        >{item.task}
        </li>
      ))}
      </div>

    <div className='button remove-button'
        onClick={ () => dispatch({type: 'REMOVE_COMPLETE'})}
      >Remove Complete
      </div>
    </div>
  );
}

export default App;





