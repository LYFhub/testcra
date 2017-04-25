import React, { Component } from 'react';
import './App.css';
class Header extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<header className="headerbar">
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">文章</a></li>
					<li><a href="#">图片</a></li>
					<li><a href="#">播放器</a></li>
				</ul>
			</header>
		);
	}
}

export default Header;