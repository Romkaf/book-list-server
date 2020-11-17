import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';
import { deleteBook, editBook } from '@models/actions';
import PropTypes from 'prop-types';

const BookCardContainer = ({ books, deleteBook, editBook, itemId }) => {
	const book = books.find((it) => it.id === Number(itemId));

	return (
		<BookCard book={book} onDeleteBook={deleteBook} onEditBook={editBook} />
	);
};

BookCardContainer.propTypes = {
	books: PropTypes.array,
	deleteBook: PropTypes.func,
	editBook: PropTypes.func,
	itemId: PropTypes.string,
};

const mapStateToProps = (books) => ({ books });

const actions = {
	deleteBook,
	editBook,
};

export default connect(mapStateToProps, actions)(BookCardContainer);
