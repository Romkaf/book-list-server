import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { addBook, uploadBook } from '@models/actions';
import PropTypes from 'prop-types';

const FormContainer = ({ addBook, uploadBook }) => {
	return <Form onAddBook={uploadBook} />;
};

FormContainer.propTypes = { addBook: PropTypes.func };

export default connect(null, { addBook, uploadBook })(FormContainer);
