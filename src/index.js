import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
	<div>
  		<Header />
  		<App />
  		<Footer />
	</div>, 
	document.getElementById('root')
);
