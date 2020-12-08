import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import error from './error';
import spinner from './spinner';

export default combineReducers({
	books,
	filter,
	error,
	spinner,
});
