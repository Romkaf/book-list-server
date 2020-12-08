import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '@models/actions';
import BookList from './BookList';
import PropTypes from 'prop-types';

const BookListContainer = ({ books, filter, fetchBooks }) => {
	useEffect(() => fetchBooks(), [fetchBooks]);

	const isInclude = (str) => str.toUpperCase().includes(filter.toUpperCase());

	const visibleBooks = filter
		? books.filter((it) => isInclude(it.name) || isInclude(it.author))
		: books;

	return <BookList books={visibleBooks} />;
};

BookListContainer.propTypes = {
	books: PropTypes.array,
	filter: PropTypes.string,
	fetchBooks: PropTypes.func,
};

const mapStateToProps = ({ books, filter }) => ({
	books,
	filter,
});

export default connect(mapStateToProps, { fetchBooks })(BookListContainer);
