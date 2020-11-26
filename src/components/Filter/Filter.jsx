import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SpriteSvg from '@utils/SpriteSvg';
import { useHistory } from 'react-router-dom';
import styles from './Filter.module.scss';
import { keyCode, TYPES, SVG_NAMES } from '@constants';

const Filter = ({ filterValue, onChangeFilter }) => {
	const [value, setValue] = useState(filterValue);
	const { filter, filter__heading, filter__input, filter__btn } = styles;
	const { TEXT, BUTTON, CLICK } = TYPES;
	const history = useHistory();

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
	};

	const handleFilterChange = (evt) => {
		if (evt.keyCode === keyCode.ENTER || evt.type === CLICK) {
			onChangeFilter(value);
			history.push(`/items/?search=${value}`, 'search');
		}
	};

	return (
		<div className={filter}>
			<h2 className={filter__heading}>Filter</h2>
			<input
				className={filter__input}
				type={TEXT}
				value={value}
				onChange={handleInputChange}
				onKeyDown={handleFilterChange}
			/>
			<button
				className={filter__btn}
				type={BUTTON}
				onClick={handleFilterChange}
			>
				<SpriteSvg name={SVG_NAMES.SEARCH} />
			</button>
		</div>
	);
};

Filter.propTypes = {
	filterValue: PropTypes.string,
	onChangeFilter: PropTypes.func,
};

export default Filter;
