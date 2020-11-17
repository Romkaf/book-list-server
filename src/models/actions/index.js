import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from './actionTypes';

export const addBook = (data) => {
	return {
		type: ADD_BOOK,
		payload: data,
	};
};

export const deleteBook = (id) => {
	return {
		type: DELETE_BOOK,
		id,
	};
};

export const editBook = (data, id) => {
	return {
		type: EDIT_BOOK,
		payload: { data, id },
	};
};
