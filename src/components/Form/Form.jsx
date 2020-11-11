import React, { useState } from 'react';
import InputField from './InputField';
import { validate } from './validate';
import { NAMES, TYPES, BOOK_FORM } from '@constants';
import styles from './Form.module.scss';

const Form = () => {
	const [errorTexts, setErrorTexts] = useState({});
	const [urlImage, setUrlImage] = useState('');

	const { NAME, IMAGE, AUTHOR, DATE, PUBLISHER } = NAMES;
	const { FILE, TEXT, DATE: TYPE_DATE } = TYPES;

	const { form, form__elem, form__button } = styles;

	const inputsData = [
		{
			name: IMAGE,
			label: 'Загрузите изображение',
			error: errorTexts?.image,
			type: FILE,
		},
		{ name: NAME, label: 'Название', error: errorTexts?.name, type: TEXT },
		{
			name: AUTHOR,
			label: 'Автор',
			error: errorTexts?.author,
			type: TEXT,
		},
		{
			name: DATE,
			label: 'Год издания',
			error: errorTexts?.date,
			type: TYPE_DATE,
		},

		{
			name: PUBLISHER,
			label: 'Издательство',
			error: errorTexts?.publisher,
			type: TEXT,
		},
	];

	const validateData = (data) => {
		const errors = validate(data);
		setErrorTexts(errors);

		// if (Object.keys(errors).length === 0) {
		// 	addDataToList(data);
		// }
	};

	const handleUrlOfImageSave = (file) => {
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setUrlImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleBtnClick = () => {
		const form = document.forms[BOOK_FORM];
		const newData = {
			name: form[NAME].value,
			image: urlImage,
			author: form[AUTHOR].value,
			date: form[DATE].value,
			publisher: form[PUBLISHER].value,
		};

		validateData(newData);
	};

	return (
		<form className={form} encType="multipart/form-data" name={BOOK_FORM}>
			<ul>
				{inputsData.map((it) => {
					const { name, label, error, type } = it;
					return (
						<li className={form__elem} key={name}>
							<InputField
								name={name}
								label={label}
								error={error}
								type={type}
								onUrlOfImageSave={type === FILE ? handleUrlOfImageSave : null}
							/>
						</li>
					);
				})}
			</ul>
			<button className={form__button} type="button" onClick={handleBtnClick}>
				Ввести данные
			</button>
		</form>
	);
};

export default Form;
