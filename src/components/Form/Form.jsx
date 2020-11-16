import React, { useState } from 'react';
import InputField from './InputField';
import { validate } from './validate';
import { NAMES, TYPES, LABELS, BOOK_FORM } from '@constants';
import styles from './Form.module.scss';

const Form = () => {
	const [errorTexts, setErrorTexts] = useState({});
	const [urlImage, setUrlImage] = useState('');

	const { NAME, IMAGE, AUTHOR, DATE, PUBLISHER } = NAMES;
	const { FILE, TEXT } = TYPES;
	const { form, form__elem, form__button } = styles;

	const inputsData = [
		{ name: NAME, label: LABELS.NAME, error: errorTexts?.name, type: TEXT },
		{
			name: AUTHOR,
			label: LABELS.AUTHOR,
			error: errorTexts?.author,
			type: TEXT,
		},
		{
			name: DATE,
			label: LABELS.DATE,
			error: errorTexts?.date,
			type: TEXT,
		},

		{
			name: PUBLISHER,
			label: LABELS.PUBLISHER,
			error: errorTexts?.publisher,
			type: TEXT,
		},
		{
			name: IMAGE,
			label: LABELS.IMAGE,
			error: errorTexts?.image,
			type: FILE,
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
