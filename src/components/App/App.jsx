import React from 'react';
import FormContainer from '@components/Form/FormContainer';
import BookListContainer from '@components/BookList/BookListContainer';
import BookCardContainer from '@components/BookCard/BookCardContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<FormContainer />
				<div className={styles.app__wrapper}>
					<BookListContainer />
					<Route
						path="/items/:id"
						render={({ match }) => {
							const { id } = match.params;
							return <BookCardContainer itemId={id} />;
						}}
					/>
				</div>
			</div>
		</Router>
	);
};

export default App;
