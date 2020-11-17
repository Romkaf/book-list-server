import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import PropTypes from 'prop-types';

const BookListContainer = ({ books }) => {
	return <BookList books={books} />;
};

BookListContainer.propTypes = { books: PropTypes.array };

const mapStateToProps = (books) => ({
	books,
});

export default connect(mapStateToProps, {})(BookListContainer);
