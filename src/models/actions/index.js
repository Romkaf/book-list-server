import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, CHANGE_FILTER } from './actionTypes';

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

export const changeFilter = (value) => {
	return {
		type: CHANGE_FILTER,
		payload: value,
	};
};
