export const initialState = {
	tasks: [
		{
			task: 'Setup Project',
			id: 1528817077286,
			completed: true
		},
		{
			task: 'Run create-react-app',
			id: 1528817084358,
			completed: false
		},
		{
			task: 'Stylize Project',
			id: 1522887034378,
			completed: false
		}
	]
};

export const tasksReducer = (state, action) => {
	switch (action.type) {

		case "CREATE_NEW_TASK":
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						task: action.payload,
						id: Math.floor((Math.random() * 1500000000000) + 1),
						completed: false,
					},
				],
			};

		case "TOGGLE_COMPLETED":
			return {
				...state,
				tasks: state.tasks.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							completed: !item.completed,
						};
					}
					return item;
				}),
			};

		case "CLEAR_COMPLETED":
			return {
				...state,
				tasks: state.tasks.filter(item => {
					return !item.completed;
				}),
			};

		default:
			return state;
	}
};