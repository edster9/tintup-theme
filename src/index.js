import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import App from './App';

// Implement a react hash router for single page navigation support
ReactDOM.render((
	<HashRouter>
		<Route component={App}/>
	</HashRouter>
), document.getElementById('root'))
