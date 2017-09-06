import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<HashRouter>
		<Route component={App}/>
	</HashRouter>
), document.getElementById('root'))

//registerServiceWorker();
