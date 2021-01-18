import React from 'react';
import Menu from '../navbar/Menu';
import Logo from '../navbar/Logo';
import HeaderStyle from './Header.module.css';

function Header() {
	return (
		<>
			<div className={HeaderStyle.header}>
				<div className={HeaderStyle.innerHeader}>
					<Logo />
					<Menu />
				</div>
			</div>
		</>
	);
}

export default Header;
