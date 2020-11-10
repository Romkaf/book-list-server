import {ERROR_TEXTS} from "@constants";

const {
REQUIRED,
MIN_LENGTH,
UNCORRECT_DATE,
DOWNLOAD_IMAGE}=ERROR_TEXTS;

const validator = {
	isMinLength: (text) => text.length > 1,
	isDateBoundaries: (date) => {
		const bottomDate = '1920 - 01 - 01';
		const topDate = new Date().toJSON().slice(0, 10);
		return date > bottomDate && date < topDate;
	},
};

export const validate = (fields) => {
	const errors = {};
	if (!validator.isMinLength(fields.name)) {
		errors.name = MIN_LENGTH;
	}

	if (!fields.name) {
		errors.name = REQUIRED;
	}

	if (!validator.isMinLength(fields.author)) {
		errors.author = MIN_LENGTH;
	}

	if (!fields.author) {
		errors.author = REQUIRED;
	}

	if (!validator.isMinLength(fields.publisher)) {
		errors.publisher = MIN_LENGTH;
	}

	if (!fields.publisher) {
		errors.publisher = REQUIRED;
	}

	if (!validator.isDateBoundaries(fields.date)) {
		errors.date = UNCORRECT_DATE;
	}

	if (!fields.date) {
		errors.date = REQUIRED;
	}

	if (!fields.image) {
		errors.image = DOWNLOAD_IMAGE;
	}

	return errors;
};
