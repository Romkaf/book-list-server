import {
	ADD_BOOK,
	DELETE_BOOK,
	EDIT_BOOK,
	FETCH_BOOKS_SUCCESS,
} from '@models/actions/actionTypes';

export default (state = [], action) => {
	let id = state.length === 0 ? 1 : state[state.length - 1].id + 1;

	switch (action.type) {
		case FETCH_BOOKS_SUCCESS:
			return action.payload;

		case ADD_BOOK:
			return [...state, { ...action.payload, id: id++ }];

		case DELETE_BOOK:
			return state.filter((it) => it.id !== action.payload);

		case EDIT_BOOK:
			return state.map((it) => {
				return it.id === action.payload.id ? { ...action.payload.data } : it;
			});

		default:
			return state;
	}
};
