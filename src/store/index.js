import { createStore } from 'redux';
import reducer from '@models/reducers';

const initialState = JSON.parse(localStorage.getItem('bookState')) || {
	books: [],
	filter: '',
};

const store = createStore(reducer, initialState);

export default store;
