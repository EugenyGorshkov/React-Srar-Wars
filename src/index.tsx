import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from "store";
import { App } from 'containers/App';
import { REPO_NAME } from 'constants/index';
import { ThemeProvider } from 'context';

import 'styles/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={`/${REPO_NAME}/`}>
			<Provider store={store}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
	,
	document.getElementById('root')
);


