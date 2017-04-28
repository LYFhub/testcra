import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Router from './Router/Router'; //路由配置
import './Style/index.css';

ReactDOM.render(
	<div>
  		<Header />
  		<App />
  		<Footer />
	</div>, 
	document.getElementById('root')
);
