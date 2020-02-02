import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

const TodoForm = () => {

	const { newTask, handleChanges, handleSubmit } = useContext(TodoContext);

	return (
		<section id='todo-form' className='todo-form'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChanges}
					type="text"
					name="item"
					value={newTask}
				/>
				<button>
					Add Task
				</button>
			</form>
		</section>
	)

};

export default TodoForm;