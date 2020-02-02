// your Components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useContext } from "react";

import TodoContext from "../contexts/TodoContext";
import Task from "./Todo";

const TodoList = () => {

	const { state, toggleCompleted, clearCompleted } = useContext(TodoContext);

	return (
		<>
			<section id='todo-list-section' className='todo-list-section'>
				<ul id='todo-list' className='todo-list'>
				{state.tasks.map(item => (
					<Task
						key={item.id}
						item={item}
						toggleCompleted={toggleCompleted}
					/>
				))}
				</ul>
			</section>
			<section id='todo-bottom-section' className='todo-bottom-section'>
				<button
					className='button button-clear'
					onClick={clearCompleted}
				>
					Clear Completed
				</button>
			</section>
		</>
	);

};

export default TodoList;