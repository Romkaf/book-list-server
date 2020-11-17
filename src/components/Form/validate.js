import { ERROR_TEXTS } from '@constants';

const {
	REQUIRED,
	MIN_LENGTH,
	MIN_LENGTH_DATE,
	UNCORRECT_DATE,
	UNREAL_DATE,
	DOWNLOAD_IMAGE,
} = ERROR_TEXTS;

const validator = {
	isMinLength: (text) => text.length > 1,
	isMinLengthDate: (date) => date.length > 3,
	isDateBoundaries: (date) => {
		const bottomDate = '1920';
		const topDate = new Date().toJSON().slice(0, 4);
		return date >= bottomDate && date <= topDate;
	},
	isNumber: (number) => number.match(/^\d+$/),
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
		errors.date = UNREAL_DATE;
	}

	if (!validator.isNumber(fields.date)) {
		errors.date = UNCORRECT_DATE;
	}

	if (!validator.isMinLengthDate(fields.date)) {
		errors.date = MIN_LENGTH_DATE;
	}

	if (!fields.date) {
		errors.date = REQUIRED;
	}

	if (!fields?.image) {
		errors.image = DOWNLOAD_IMAGE;
	}

	return errors;
};
