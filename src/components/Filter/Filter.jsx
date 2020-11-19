import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SpriteSvg from '@components/BookCard/sprite.svg.jsx';
import { Link } from 'react-router-dom';
import styles from './Filter.module.scss';

const Filter = (props) => {
	const [value, setValue] = useState('');
	const { filter, filter__heading, filter__input, filter__link } = styles;

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
	};

	return (
		<div className={filter}>
			<h2 className={filter__heading}>Filter</h2>
			<input
				className={filter__input}
				type="text"
				value={value}
				onChange={handleInputChange}
			/>
			<Link className={filter__link} to={`/items/?search=${value}`}>
				<SpriteSvg width="100%" name="search" />
			</Link>
		</div>
	);
};

Filter.propTypes = {};

export default Filter;
