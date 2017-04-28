import React, { Component } from 'react';
import '../Style/App.css';
class Footer extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className="footerbar">
				<ul>
					<li><a href="#">关于我们</a></li>
					<li><a href="#">合作伙伴</a></li>
					<li><a href="#">联系方式</a></li>
				</ul>
			</div>
		);
	}
}

export default Footer;