import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '@models/actions';
import BookList from './BookList';
import Spinner from '@components/Spinner';
import PropTypes from 'prop-types';

const BookListContainer = ({ books, filter, fetchBooks, spinner }) => {
	useEffect(() => fetchBooks(), [fetchBooks]);

	if (spinner) {
		return <Spinner />;
	}

	const isInclude = (str) => str.toUpperCase().includes(filter.toUpperCase());

	const visibleBooks = filter
		? books.filter((it) => isInclude(it.name) || isInclude(it.author))
		: books;

	return <BookList books={visibleBooks} />;
};

BookListContainer.propTypes = {
	books: PropTypes.array,
	filter: PropTypes.string,
	spinner: PropTypes.bool,
	fetchBooks: PropTypes.func,
};

const mapStateToProps = ({ books, filter, spinner }) => ({
	books,
	filter,
	spinner,
});

export default connect(mapStateToProps, { fetchBooks })(BookListContainer);
