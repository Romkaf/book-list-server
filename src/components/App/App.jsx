import React from 'react';
import Form from '@components/Form';
import BookList from '@components/BookList';
import BookCard from '@components/BookCard';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Form />
				<div className={styles.app__wrapper}>
					<BookList />
					<BookCard />
				</div>
			</div>
		</Router>
	);
};

export default App;
