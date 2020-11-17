import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '@models/actions/actionTypes';

const reducer = (state = [], action) => {
	let id = state.length === 0 ? 1 : state[state.length - 1].id + 1;

	switch (action.type) {
		case ADD_BOOK:
			return [...state, { ...action.payload, id: id++ }];

		case DELETE_BOOK:
			return [state.filter((it) => it.id !== action.id)];

		case EDIT_BOOK:
			return state.map((it) => {
				return it.id === action.payload.id ? { ...action.payload.data } : it;
			});

		default:
			return state;
	}
};

export default reducer;
