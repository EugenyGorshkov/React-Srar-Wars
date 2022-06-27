import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store';

import App from '@containers/App';

import '@styles/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>	
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

