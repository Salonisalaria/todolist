import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, addSubTask } from '../actions/todo';
import './TodoList.css';
import { sanitizeText } from '../utils';

const TodoList = ({ token }) => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.todos);
	const [taskInput, setTaskInput] = useState('');
	const [subtaskInputs, setSubtaskInputs] = useState([]);

	console.log(tasks);

	const addTask = (event) => {
		event.preventDefault();
		if (taskInput.trim() !== '') {
			dispatch(addTodo({ text: taskInput, subTasks: [] }));
			setTaskInput('');
		}
	};

	const addSubtask = (index) => {
		const input = subtaskInputs[index] || '';
		if (input.trim() !== '') {
			dispatch(addSubTask(input, index));
			const newSubtaskInputs = [...subtaskInputs];
			newSubtaskInputs[index] = '';
			setSubtaskInputs(newSubtaskInputs);
		}
	};

	return (
		<div className="container">
			<h1>Todo List: Tasks and Subtasks</h1>

			<form onSubmit={addTask}>
				<input
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
					type="text"
					placeholder="Add a task"
				/>
				<button type="submit">Add Task</button>
			</form>

			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<span dangerouslySetInnerHTML={{ __html: sanitizeText(task.text) }} />
						<div className="subtasks-container">
							<ul>
								{task.subTasks.map((subtask, subIndex) => (
									<li key={subIndex}>
										<span dangerouslySetInnerHTML={{ __html: sanitizeText(subtask) }} />
									</li>
								))}
							</ul>
							<form onSubmit={(event) => event.preventDefault()}>
								<input
									value={subtaskInputs[index] || ''}
									onChange={(e) => {
										const newSubtaskInputs = [...subtaskInputs];
										newSubtaskInputs[index] = e.target.value;
										setSubtaskInputs(newSubtaskInputs);
									}}
									type="text"
									placeholder="Add a subtask"
								/>
								<button type="button" onClick={() => addSubtask(index)}>
									Add Subtask
								</button>
							</form>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;