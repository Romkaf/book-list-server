import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookListContainer = ({ books }) => {
	const filterQuery = new URLSearchParams(useLocation().search).get('search');
	const isInclude = (str) =>
		str.toUpperCase().includes(filterQuery.toUpperCase());

	const visibleBooks = filterQuery
		? books.filter((it) => isInclude(it.name) || isInclude(it.author))
		: books;

	return <BookList books={visibleBooks} />;
};

BookListContainer.propTypes = { books: PropTypes.array };

const mapStateToProps = (books) => ({
	books,
});

export default connect(mapStateToProps, {})(BookListContainer);
