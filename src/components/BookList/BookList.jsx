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
		wrapper,
		table,
		table__row,
		table__header,
		table__heading,
		table__link,
	} = styles;

	const renderItem = ({ name, author, id }) => {
		return (
			<tr className={table__row} key={id}>
				<td>{name}</td>
				<td>{author}</td>
			</tr>
		);
	};

	return (
		<div className={wrapper}>
			<h2 className={table__heading}>Book List</h2>
			<table className={table}>
				<thead className={table__header}>
					<tr className={table__row}>
						<td>Книга</td>
						<td>Автор</td>
					</tr>
				</thead>
				<tbody>
					{books.map((it) => (
						<Link to={`/items/${it.id}`} className={table__link}>
							{renderItem(it)}
						</Link>
					))}
				</tbody>
			</table>
		</div>
	);
};

Booklist.propTypes = {};

export default Booklist;
