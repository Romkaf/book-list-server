import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import { changeFilter } from '@models/actions';

const FilterContainer = ({ filter, changeFilter }) => {
	return <Filter filterValue={filter} onChangeFilter={changeFilter} />;
};

FilterContainer.propTypes = {
	filter: PropTypes.string,
	changeFilter: PropTypes.func,
};

const mapStateToProps = ({ filter }) => ({
	filter,
});

export default connect(mapStateToProps, { changeFilter })(FilterContainer);
