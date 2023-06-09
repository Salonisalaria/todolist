const initialState = [];

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, { ...action.payload, subTasks: [] }];
		case 'ADD_SUBTASK':
			return state.map((todo, index) => {
        if (index === action.todoIndex) {
          return { ...todo, subTasks: [...todo.subTasks, action.payload] };
        }
        return todo;
      });
		default:
			return state;
	}
};

export default todoReducer;