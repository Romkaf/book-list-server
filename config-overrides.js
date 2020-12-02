const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': 'src/components',
		'@models': 'src/models',
		'@styles': 'src/styles',
		'@constants': 'src/constants',
		'@utils': 'src/utils',
		'@sagas': 'src/sagas',
	})(config);

	return config;
};
