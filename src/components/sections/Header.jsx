import React from 'react';
import Menu from '../navbar/Menu';
import Logo from '../navbar/Logo';
import HeaderStyle from './Header.module.css';

function Header() {
	return (
		<>
			<header className={HeaderStyle.header}>
				<div className={HeaderStyle.innerHeader}>
					<Logo />
					<Menu />
				</div>
			</header>
		</>
	);
}

export default Header;
