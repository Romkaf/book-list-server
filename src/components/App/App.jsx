import React from 'react';
import Form from '@components/Form';
import BookList from '@components/BookList';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Form />
				<BookList />
			</div>
		</Router>
	);
};

export default App;
