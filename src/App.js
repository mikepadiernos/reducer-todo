// Import React Components
import React, { useState } from 'react';

// Import Contexts
import TodoContext from "./contexts/TodoContext";

// Import Data source
import Data from "./data/Data";

// Import App Components
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {

  const [tasks] = useState(Data);


  const addNewTask = newItemTask => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newItemTask, completed: false, id: Math.floor((Math.random() * 1500000000000) + 1) }
      ]
    };
    this.setState(newState);
  };

  const toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  const clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  return (
    <TodoContext value={{tasks}}>
      <div className='app app-container'>
        <header id='app-header' className='app-header'>
          <h1>My Todo's</h1>
        </header>
        <main id='app-content' className='app-content'>
          <TodoForm
            addNewTask={addNewTask}
          />
          <TodoList
            toggleCompleted={toggleCompleted}
            clearCompleted={clearCompleted}
          />
        </main>
      </div>
    </TodoContext>
  );

}

export default App;
