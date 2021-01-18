import React from 'react';
import Menu from '../navbar/Menu';
import Logo from '../navbar/Logo';
import HeaderStyle from './Header.module.css';

function Header() {
	return (
		<div>
			<div className={HeaderStyle.header}>
				<Logo />
				<Menu />
			</div>
		</div>
	);
}

export default Header;
