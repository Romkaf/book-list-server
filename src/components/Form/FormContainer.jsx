import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { addBook, uploadBook } from '@models/actions';
import PropTypes from 'prop-types';

const FormContainer = ({ uploadBook }) => {
	return <Form onUploadBook={uploadBook} />;
};

FormContainer.propTypes = { uploadBook: PropTypes.func };

export default connect(null, { uploadBook })(FormContainer);
