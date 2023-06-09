export const addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		payload: { ...todo, subTasks: [] },
	};
};

export const addSubTask = (subTask, todoIndex) => {
	return {
		type: 'ADD_SUBTASK',
		payload: subTask,
		todoIndex: todoIndex,
	};
};