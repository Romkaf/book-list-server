import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';

const initialState = JSON.parse(localStorage.getItem(locStorKey)) || {
	books: [],
	filter: '',
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
