import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:4000/items',
	headers: { 'Content-Type': 'application/json;charset=utf-8' },
	responseType: 'json',
});
