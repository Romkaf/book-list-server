import axios from '@api/axios';

export const fetchGetBooks = () => axios.get(`/`);
export const fetchPostBook = (book) => axios.post(`/`, book);
export const fetchDeleteBook = (id) => axios.delete(`/${id}`);
export const fetchPutBook = (data, id) => axios.put(`/${id}`, data);
