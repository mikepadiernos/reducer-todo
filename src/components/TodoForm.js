import React, { useState } from "react";

const TodoForm = props => {

	const [task, setTask] = useState("Test")
	const [newTask, setNewTask] = useState("");

	const handleChanges = e => {
		setNewTask(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addNewTask(newTask);
		setNewTask({newTask: ""})
	};

	return (
		<section id='todo-form' className='todo-form'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChanges}
					type="text"
					name="item"
					value={props.newTask}
				/>
				<button>
					Add Task
				</button>
			</form>
		</section>
	)

}

export default TodoForm;