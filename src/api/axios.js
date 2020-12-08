import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3200/items',
	headers: { 'Content-Type': 'application/json;charset=utf-8' },
	responseType: 'json',
});
