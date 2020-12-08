import {
	ADD_BOOK,
	DELETE_BOOK,
	EDIT_BOOK,
	CHANGE_FILTER,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS,
	UPLOAD_BOOK,
} from './actionTypes';

export const fetchBooks = (data) => {
	return {
		type: FETCH_BOOKS,
	};
};

export const fetchBooksSuccess = (data) => {
	return {
		type: FETCH_BOOKS_SUCCESS,
		payload: data,
	};
};

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

export const uploadBook = (book) => ({
	type: UPLOAD_BOOK,
	payload: book,
});
