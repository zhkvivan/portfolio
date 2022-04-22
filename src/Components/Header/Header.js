import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className="header-wrap container">
			<div className="top-bar">
				<div className="logo">IZ</div>
				<nav>
					<a href="#">Summary</a>
					<a href="#">Projects</a>
					<a href="#">Contact details</a>
				</nav>
			</div>
		</div>
	);
};

export default Header;
