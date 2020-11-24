import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NAMES } from '@constants';
import styles from './InputField.module.scss';

const InputField = ({ name, label, error, type, onUrlOfImageSave, reset }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		reset && setValue('');
	}, [reset]);

	const classField = classNames(styles.field);
	const classError = classNames(styles.field__error);
	const classLabel = classNames(styles.field__label, {
		[styles.field__label_small]: value,
	});
	const classInput = classNames(styles.field__input, {
		[styles.field__input_wrong]: error,
	});

	const changeNameOfLabel = (evt) => {
		const input = evt.target;
		const label = input.nextElementSibling;
		const fileName = input.files[0]?.name;
		if (fileName) {
			label.innerHTML = fileName;
		}
	};

	const handleInputChange = (evt) => {
		if (evt.target.type === 'file') {
			changeNameOfLabel(evt);
			const file = evt.target.files[0];
			onUrlOfImageSave(file);
		} else {
			setValue(evt.target.value);
		}
	};

	return (
		<div className={classField}>
			<input
				className={classInput}
				id={name}
				type={type}
				name={name}
				value={value}
				onChange={handleInputChange}
				maxLength={name === NAMES.DATE ? 4 : null}
				required
			/>
			<label className={classLabel} htmlFor={name}>
				{label}
			</label>
			{error && <span className={classError}>{error}</span>}
		</div>
	);
};

InputField.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	reset: PropTypes.bool,
	onUrlOfImageSave: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.instanceOf(null),
	]),
};

export default InputField;
