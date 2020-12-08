import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_BOOKS, UPLOAD_BOOK } from '@models/actions/actionTypes';
import { fetchBooksSuccess, addBook } from '@models/actions';
import axios from '../api/axios';

function fetchData() {
	return axios.get('/');
}

function* workerFetchBooks() {
	const { data } = yield call(fetchData);
	yield put(fetchBooksSuccess(data));
}

export function* watchFetchBooks() {
	yield takeEvery(FETCH_BOOKS, workerFetchBooks);
}

function fetchPostData(book) {
	return axios.post('/', book);
}

function* workerUploadBook({ payload }) {
	try {
		const { status } = yield fetchPostData(payload);
		if (status <= 299) yield put(addBook(payload));
	} catch (error) {
		alert(`Что то пошло не так! ${error}`);
	}
}

export function* watchUploadBook() {
	yield takeEvery(UPLOAD_BOOK, workerUploadBook);
}
