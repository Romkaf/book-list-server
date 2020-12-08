import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.scss';
import { Link } from 'react-router-dom';

const Booklist = ({ books }) => {
	const {
		bookList,
		bookList__empty,
		bookList__heading,
		table,
		table__row,
		table__header,
		table__link,
	} = styles;

	const renderItem = ({ name, author, id }) => {
		return (
			<tr className={table__row} key={id}>
				<td>
					<Link to={`/items/${id}`} className={table__link}>
						<span>{name}</span>
						<span>{author}</span>
					</Link>
				</td>
			</tr>
		);
	};

	return (
		<div className={bookList}>
			<h2 className={bookList__heading}>Book List</h2>
			{!books.length ? (
				<span className={bookList__empty}>Список пуст!</span>
			) : (
				<table className={table}>
					<thead>
						<tr className={table__header}>
							<td>Книга</td>
							<td>Автор</td>
						</tr>
					</thead>
					<tbody>{books.map(renderItem)}</tbody>
				</table>
			)}
		</div>
	);
};

Booklist.propTypes = { books: PropTypes.array };

export default Booklist;
