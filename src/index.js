import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store';
import { REPO_NAME } from '@constants/repo';

import App from '@containers/App';
import ThemeProvider from '@context/ThemeProvider';

import '@styles/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={`/${REPO_NAME}/`}>
			<Provider store={store}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

