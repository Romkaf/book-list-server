import React from 'react';
import FormContainer from '@components/Form/FormContainer';
import FilterContainer from '@components/Filter/FilterContainer';
import BookListContainer from '@components/BookList/BookListContainer';
import BookCardContainer from '@components/BookCard/BookCardContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.scss';
import ErrorIndicator from '@components/ErrorIndicator';
import { useSelector } from 'react-redux';

const App = () => {
	const error = useSelector((state) => state.error);

	return (
		<Router>
			<div className={styles.app}>
				{error && <ErrorIndicator text={error} />}
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
