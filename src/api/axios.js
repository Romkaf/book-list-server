import axios from 'axios';
import { baseURL } from '@constants';

export default axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json;charset=utf-8' },
	responseType: 'json',
});
