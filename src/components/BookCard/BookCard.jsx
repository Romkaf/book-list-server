import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BookCard.module.scss';
import SpriteSvg from './sprite.svg';
import BookEdit from '@components/BookCard/BookEdit';

const BookCard = () => {
	const [isEdit, setIsEdit] = useState(false);

	const book = {
		name: 'Умиротворенное одиночество',
		image:
			'https://aboutspacejornal.net/wp-content/uploads/2016/01/sun1-1024x9101.jpg',
		author: 'Роберт Рождественский',
		publisher: 'Дрофа',
		date: '2000',
		id: 1,
	};

	const buttons = [
		{ title: 'Редактировать', id: 'edit' },
		{ title: 'Удалить', id: 'delete' },
		{ title: 'Закрыть', id: 'close' },
	];

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

	const { image, name, author, publisher, date } = book;

	return (
		<div className={wrapper}>
			<article className={card}>
				<h2 className={card__heading}>Book Card</h2>
				{isEdit ? (
					<BookEdit book={book} onSetIsEdit={setIsEdit} />
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
							{buttons.map(({ title, id }) => (
								<button
									className={card__btn}
									key={id}
									title={title}
									onClick={id === 'edit' ? handleBtnEdit : null}
								>
									<SpriteSvg name={id} />
								</button>
							))}
						</div>
					</>
				)}
			</article>
		</div>
	);
};

BookCard.propTypes = {};

export default BookCard;
