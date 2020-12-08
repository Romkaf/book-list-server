import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';
import { watchFetchBooks, watchUploadBook } from '@sagas';

const initialState = JSON.parse(localStorage.getItem(locStorKey)) || {
	books: [],
	filter: '',
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	initialState,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchFetchBooks);
sagaMiddleware.run(watchUploadBook);

export default store;
