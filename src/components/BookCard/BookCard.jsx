import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BookCard.module.scss';
import SpriteSvg from './sprite.svg';
import BookEdit from '@components/BookCard/BookEdit';

const BookCard = ({ book, onDeleteBook, onEditBook }) => {
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		setIsEdit(false);
	}, [book]);

	const { image, name, author, publisher, date, id } = book;

	const {
		wrapper,
		card,
		card__heading,
		card__textinfo,
		card__cover,
		card__name,
		card__author,
		card__otherDetails,
		card__publisher,
		card__date,
		card__buttons,
		card__btn,
	} = styles;

	const handleBtnEdit = () => {
		setIsEdit(true);
	};

	const handleBtnDelete = () => {
		onDeleteBook(id);
	};

	const buttons = [
		{
			title: 'Редактировать',
			id: 'edit',
			func: handleBtnEdit,
			link: `/items/${id}`,
		},
		{ title: 'Удалить', id: 'delete', func: handleBtnDelete, link: `/items` },
		{ title: 'Закрыть', id: 'close', link: `/items` },
	];

	return (
		<div className={wrapper}>
			<article className={card}>
				<h2 className={card__heading}>Book Card</h2>
				{isEdit ? (
					<BookEdit
						book={book}
						onSetIsEdit={setIsEdit}
						onEditBook={onEditBook}
					/>
				) : (
					<>
						<div className={card__cover}>
							<img src={image} alt={name} />
						</div>
						<div className={card__textinfo}>
							<h4 className={card__name}>{name}</h4>
							<span className={card__author}>{author}</span>
							<div className={card__otherDetails}>
								<p>
									Издательство
									<span className={card__publisher}>{publisher}</span>
								</p>
								<p>
									Год издания
									<span className={card__date}>{date}</span>
								</p>
							</div>
						</div>
						<div className={card__buttons}>
							{buttons.map((it) => (
								<Link
									to={it.link}
									className={card__btn}
									key={it.id}
									title={it.title}
									onClick={it?.func}
								>
									<SpriteSvg name={it.id} />
								</Link>
							))}
						</div>
					</>
				)}
			</article>
		</div>
	);
};

BookCard.propTypes = {
	books: PropTypes.array,
	deleteBook: PropTypes.func,
	editBook: PropTypes.func,
};

export default BookCard;
