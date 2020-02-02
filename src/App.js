// Import React Components
import React, { useState, useReducer } from 'react';

// Import Contexts
import TodoContext from "./contexts/TodoContext";

// Import Data source
// import Data from "./data/Data";

// Import App Components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Import Reducer(s)
import { initialState, tasksReducer } from './reducers/App';

function App() {

  const [ state, dispatch ] = useReducer( tasksReducer, initialState );

  const [ tasks ] = useState(state);
  // const [ task, setTask] = useState([]);
  const [ newTask, setNewTask ] = useState("");

  console.log("state:", state);

  const createNewTask = task => {
    dispatch({
      type: "CREATE_NEW_TASK",
      payload: task
    });
    console.log("CREATE_NEW_TASK");
  };

  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id
    });
    console.log("TOGGLE_COMPLETED");
  };

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    });
    console.log("CLEAR_COMPLETED");
  };

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask('');
  };

  return (
    <TodoContext.Provider
      value={{ state, tasks, newTask, createNewTask, toggleCompleted, clearCompleted, handleChanges, handleSubmit }}
    >
      <div className='app app-container'>
        <header id='app-header' className='app-header'>
          <h1>My Todo's</h1>
        </header>
        <main id='app-content' className='app-content'>
          <TodoForm />
          <TodoList />
        </main>
      </div>
    </TodoContext.Provider>
  );

}

export default App;
