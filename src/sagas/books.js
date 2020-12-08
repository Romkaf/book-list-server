import { takeEvery, call, put, all, delay } from 'redux-saga/effects';
import {
	FETCH_BOOKS,
	UPLOAD_BOOK,
	REQUEST_DELETE_BOOK,
	REQUEST_EDIT_BOOK,
} from '@models/actions/actionTypes';
import {
	fetchBooksSuccess,
	addBook,
	deleteBook,
	editBook,
	showError,
	hideError,
	showSpinner,
	hideSpinner,
} from '@models/actions';
import {
	fetchGetBooks,
	fetchPostBook,
	fetchDeleteBook,
	fetchPutBook,
} from '@api/request';

function* showAndHideError(text, error) {
	yield put(showError(`${text} ${error}`));
	yield delay(4000);
	yield put(hideError());
}

function* workerFetchBooks() {
	try {
		yield put(showSpinner());
		const { data } = yield call(fetchGetBooks);
		yield put(fetchBooksSuccess(data));
		yield put(hideSpinner());
	} catch (error) {
		yield put(hideSpinner());
		yield showAndHideError('Данные не загрузились!', error);
	}
}

function* workerUploadBook({ payload }) {
	try {
		yield fetchPostBook(payload);
		yield put(addBook(payload));
	} catch (error) {
		yield showAndHideError('Данные не были отправлены на сервер!', error);
	}
}

function* workerDeleteBook({ payload }) {
	try {
		yield fetchDeleteBook(payload);
		yield put(deleteBook(payload));
	} catch (error) {
		yield showAndHideError('Ошибка запроса на сервер!', error);
	}
}

function* workerEditBook({ payload }) {
	try {
		const { id, data } = payload;
		yield fetchPutBook(data, id);
		yield put(editBook(data, id));
	} catch (error) {
		yield showAndHideError('Ошибка запроса на сервер!', error);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_BOOKS, workerFetchBooks),
		takeEvery(UPLOAD_BOOK, workerUploadBook),
		takeEvery(REQUEST_DELETE_BOOK, workerDeleteBook),
		takeEvery(REQUEST_EDIT_BOOK, workerEditBook),
	]);
}
