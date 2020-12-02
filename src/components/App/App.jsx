import React, { useEffect } from 'react';
import FormContainer from '@components/Form/FormContainer';
import FilterContainer from '@components/Filter/FilterContainer';
import BookListContainer from '@components/BookList/BookListContainer';
import BookCardContainer from '@components/BookCard/BookCardContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {
	// useEffect(() => {
	// 	let url = 'http://localhost:4000/items';
	// 	fetch(url)
	// 		.then((resp) => resp.json())
	// 		.then((data) => console.log('data', data));
	// });

	return (
		<Router>
			<div className={styles.app}>
				<FormContainer />
				<FilterContainer />
				<div className={styles.app__wrapper}>
					<BookListContainer />
					<Route
						path="/items/:id"
						children={({ match, location }) => (
							<BookCardContainer
								itemId={match?.params.id || null}
								location={location}
							/>
						)}
					/>
				</div>
			</div>
		</Router>
	);
};

export default App;
