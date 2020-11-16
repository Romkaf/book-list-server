import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BookList.module.scss';
import { Link } from 'react-router-dom';

const books = [
	{
		name: 'Стихи',
		author: 'Роберт Рождественский',
		id: 1,
	},
	{
		name: 'Выразительный JS',
		author: 'Марк Харвейк',
		id: 2,
	},
];

const Booklist = () => {
	const {
		bookList,
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
			<table className={table}>
				<thead>
					<tr className={table__header}>
						<td>Книга</td>
						<td>Автор</td>
					</tr>
				</thead>
				<tbody>{books.map(renderItem)}</tbody>
			</table>
		</div>
	);
};

Booklist.propTypes = {};

export default Booklist;
