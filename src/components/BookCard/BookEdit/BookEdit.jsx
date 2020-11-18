import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NAMES, LABELS, EDIT_FORM } from '@constants';
import SpriteSvg from '@components/BookCard/sprite.svg';
import { validate } from '@components/Form/validate.js';
import styles from './BookEdit.module.scss';
import classNames from 'classnames';

const BookEdit = ({ book, onSetIsEdit, onEditBook }) => {
	const [errorTexts, setErrorTexts] = useState({});
	const [urlImage, setUrlImage] = useState('');

	const { image, name, author, publisher, date, id } = book;
	const { NAME, IMAGE, AUTHOR, DATE, PUBLISHER } = NAMES;
	const {
		form,
		form__imgCover,
		buttons,
		buttons__btn,
		error: classError,
		wrong,
	} = styles;

	const handleBtnSave = () => {
		const form = document.forms[EDIT_FORM];
		const newData = {
			name: form[NAME].value,
			image: urlImage || image,
			author: form[AUTHOR].value,
			publisher: form[PUBLISHER].value,
			date: form[DATE].value,
			id,
		};

		validateData(newData);
	};

	const validateData = (data) => {
		const errors = validate(data);
		setErrorTexts(errors);

		if (Object.keys(errors).length === 0) {
			onEditBook(data, id);
			onSetIsEdit(false);
		}
	};

	const handleInputFileChange = (evt) => {
		if (evt.target.type === 'file') {
			const file = evt.target.files[0];
			if (evt.target.files[0]) {
				const reader = new FileReader();
				reader.onload = () => {
					evt.target.previousSibling.src = reader.result;
					setUrlImage(reader.result);
				};
				reader.readAsDataURL(file);
			}
		}
	};

	const handleInputSizeChange = (evt) => {
		evt.target.setAttribute('size', evt.target.value.length + 1);
	};

	const handleBtnCansel = () => onSetIsEdit(false);

	const dataBook = [
		{ name, label: LABELS.NAME, id: NAME, error: errorTexts?.name },
		{
			name: author,
			label: LABELS.AUTHOR,
			id: AUTHOR,
			error: errorTexts?.author,
		},
		{
			name: publisher,
			label: LABELS.PUBLISHER,
			id: PUBLISHER,
			error: errorTexts?.publisher,
		},
		{ name: date, label: LABELS.DATE, id: DATE, error: errorTexts?.date },
	];

	return (
		<>
			<form className={form} name={EDIT_FORM}>
				<h3>Режим редактирования</h3>
				<div className={form__imgCover}>
					<img src={image} alt={name} />
					<input type="file" id={IMAGE} onChange={handleInputFileChange} />
				</div>
				{dataBook.map(({ name, label, id, error }) => {
					const classInputWrong = classNames({ [wrong]: error });
					return (
						<label key={id}>
							{label}
							<input
								className={classInputWrong}
								type="text"
								id={id}
								defaultValue={name}
								size={name.length + 1}
								maxLength={name === date ? 4 : null}
								onChange={name !== date ? handleInputSizeChange : null}
							/>
							{error && <span className={classError}>{error}</span>}
						</label>
					);
				})}
			</form>
			<div className={buttons}>
				<button
					className={buttons__btn}
					title="Сохранить изменения"
					onClick={handleBtnSave}
				>
					<SpriteSvg name="save" />
				</button>
				<button
					className={buttons__btn}
					title="Отмена"
					onClick={handleBtnCansel}
				>
					<SpriteSvg name="close" />
				</button>
			</div>
		</>
	);
};

BookEdit.propTypes = {
	book: PropTypes.object,
	onSetIsEdit: PropTypes.func,
};

export default BookEdit;
