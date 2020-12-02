import {
	ADD_BOOK,
	DELETE_BOOK,
	EDIT_BOOK,
	CHANGE_FILTER,
	LOAD_BOOKS,
	FETCH_BOOKS,
} from './actionTypes';

export const fetchBooks = (data) => {
	return {
		type: FETCH_BOOKS,
	};
};

export const loadBooks = (data) => {
	return {
		type: LOAD_BOOKS,
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

export const uploadBook = (book) => (dispatch) => {
	let url = 'http://localhost:4000/items';
	console.log('work');
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(book),
	}).then(() => dispatch(addBook(book)));
};

// export const loadBooks = () => (dispatch) => {
// 	let url = 'http://localhost:4000/items';
// 	fetch(url)
// 		.then((resp) => resp.json())
// 		.then((result) => dispatch(fetchBooks(result)));
// };
