import React from "react";

const Task = props => {
	return (
		<li
			onClick={event => props.toggleCompleted(props.item.id)}
			className={`todo-item${props.item.completed ? " completed" : ""}`}
		>
			<article className='task-item'>
				<p>{props.item.task}</p>
			</article>
		</li>
	);
};

export default Task;