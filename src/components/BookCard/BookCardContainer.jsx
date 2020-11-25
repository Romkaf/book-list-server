import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';
import { deleteBook, editBook } from '@models/actions';
import PropTypes from 'prop-types';

class BookCardContainer extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.location.state !== 'search';
	}

	render() {
		const { books, deleteBook, editBook, itemId } = this.props;
		const book = books.find((it) => it.id === Number(itemId));
		if (!books.length) {
			return null;
		}

		if (!book) {
			return <span style={{ margin: 'auto' }}>Выберите книгу!</span>;
		}

		return (
			<BookCard book={book} onDeleteBook={deleteBook} onEditBook={editBook} />
		);
	}
}

BookCardContainer.propTypes = {
	books: PropTypes.array,
	deleteBook: PropTypes.func,
	editBook: PropTypes.func,
	itemId: PropTypes.string,
};

const mapStateToProps = ({ books }) => ({ books });

const actions = {
	deleteBook,
	editBook,
};

export default connect(mapStateToProps, actions)(BookCardContainer);
