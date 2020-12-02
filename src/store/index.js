import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';
import { watchFetchBooks } from '@sagas';

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

export default store;
