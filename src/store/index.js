import { createStore } from 'redux';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';

const initialState = JSON.parse(localStorage.getItem(locStorKey)) || {
	books: [],
	filter: '',
};

const store = createStore(reducer, initialState);

export default store;
