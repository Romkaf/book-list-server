import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_BOOKS } from '@models/actions/actionTypes';
import { loadBooks } from '@models/actions';

function fetchData() {
	return fetch('http://localhost:4000/items').then((resp) => resp.json());
}

function* workerFetchBooks() {
	const data = yield call(fetchData);
	yield put(loadBooks(data));
}

export function* watchFetchBooks() {
	yield takeEvery(FETCH_BOOKS, workerFetchBooks);
}
