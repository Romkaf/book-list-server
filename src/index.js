import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import store from './store';
import { Provider } from 'react-redux';
import '@styles/reset.css';
import '@styles/global.scss';

store.subscribe(() => {
	localStorage.setItem('bookState', JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
