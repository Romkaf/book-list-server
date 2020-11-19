import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SpriteSvg from '@components/BookCard/sprite.svg.jsx';
import { useHistory } from 'react-router-dom';
import styles from './Filter.module.scss';

const Filter = ({ filterValue, onChangeFilter }) => {
	const [value, setValue] = useState(filterValue);
	const { filter, filter__heading, filter__input, filter__btn } = styles;
	const history = useHistory();

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
	};

	const handleFilterChange = (evt) => {
		if (evt.keyCode === 13 || evt.type === 'click') {
			onChangeFilter(value);
			history.push(`/items/?search=${value}`);
		}
	};

	return (
		<div className={filter}>
			<h2 className={filter__heading}>Filter</h2>
			<input
				className={filter__input}
				type="text"
				value={value}
				onChange={handleInputChange}
				onKeyDown={handleFilterChange}
			/>
			<button className={filter__btn} onClick={handleFilterChange}>
				<SpriteSvg name="search" />
			</button>
		</div>
	);
};

Filter.propTypes = {
	filterValue: PropTypes.string,
	onChangeFilter: PropTypes.func,
};

export default Filter;
