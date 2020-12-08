import {
	ADD_BOOK,
	DELETE_BOOK,
	REQUEST_DELETE_BOOK,
	REQUEST_EDIT_BOOK,
	EDIT_BOOK,
	CHANGE_FILTER,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS,
	UPLOAD_BOOK,
	SHOW_ERROR,
	HIDE_ERROR,
	HIDE_SPINNER,
	SHOW_SPINNER,
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
		payload: id,
	};
};

export const requestDeleteBook = (id) => {
	return {
		type: REQUEST_DELETE_BOOK,
		payload: id,
	};
};

export const requestEditBook = (data, id) => {
	return {
		type: REQUEST_EDIT_BOOK,
		payload: { data, id },
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

export const hideError = () => ({
	type: HIDE_ERROR,
});

export const showError = (text) => ({ type: SHOW_ERROR, payload: text });

export const hideSpinner = () => ({
	type: HIDE_SPINNER,
});

export const showSpinner = () => ({
	type: SHOW_SPINNER,
});
