import {
	ADD_BOOK,
	DELETE_BOOK,
	REQUEST_DELETE_BOOK,
	REQUEST_EDIT_BOOK,
	EDIT_BOOK,
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

export const requestDeleteBook = (id) => {
	return {
		type: REQUEST_DELETE_BOOK,
		payload: id,
	};
};

export const deleteBook = (id) => {
	return {
		type: DELETE_BOOK,
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

export const uploadBook = (book) => ({
	type: UPLOAD_BOOK,
	payload: book,
});
