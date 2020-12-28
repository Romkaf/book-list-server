import { CHANGE_FILTER } from './actionTypes';

export const changeFilter = (value) => {
	return {
		type: CHANGE_FILTER,
		payload: value,
	};
};
