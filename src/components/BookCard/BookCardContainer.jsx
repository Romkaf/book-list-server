import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';
import { requestDeleteBook, requestEditBook } from '@models/actions';
import PropTypes from 'prop-types';

class BookCardContainer extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.location.state !== 'search';
	}

	render() {
		const { books, requestDeleteBook, requestEditBook, itemId } = this.props;
		const book = books.find((it) => it.id === Number(itemId));
		if (!books.length) {
			return null;
		}

		if (!book) {
			return <span style={{ margin: 'auto' }}>Выберите книгу!</span>;
		}

		return (
			<BookCard
				book={book}
				onDeleteBook={requestDeleteBook}
				onEditBook={requestEditBook}
			/>
		);
	}
}

BookCardContainer.propTypes = {
	books: PropTypes.array,
	requestDeleteBook: PropTypes.func,
	requestEditBook: PropTypes.func,
	itemId: PropTypes.string,
};

const mapStateToProps = ({ books }) => ({ books });

const actions = {
	requestDeleteBook,
	requestEditBook,
};

export default connect(mapStateToProps, actions)(BookCardContainer);
