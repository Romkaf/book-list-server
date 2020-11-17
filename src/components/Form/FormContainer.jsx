import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { addBook } from '@models/actions';
import PropTypes from 'prop-types';

const FormContainer = ({ addBook }) => {
	return <Form onAddBook={addBook} />;
};

FormContainer.propTypes = { addBook: PropTypes.func };

export default connect(null, { addBook })(FormContainer);
