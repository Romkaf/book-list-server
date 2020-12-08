import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';
import rootSaga from '@sagas';

const initialState = JSON.parse(localStorage.getItem(locStorKey)) || {
	books: [],
	filter: '',
	error: null,
	spinner: false,
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	initialState,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
