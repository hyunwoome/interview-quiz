import React, { useState } from 'react';
import MenuStyle from './Menu.module.css';
import Dropdown from '../../assets/images/dropdown.png';

function Menu() {
	const [menu, setMenu] = useState(false);

	return (
		<div className={MenuStyle.menu}>
			<button className={MenuStyle.button} onClick={() => setMenu(!menu)}>
				Menu{' '}
				<img className={MenuStyle.dropdown} src={Dropdown} alt="dropdown" />
			</button>
			{menu ? (
				<ul className={MenuStyle.list}>
					<li className={MenuStyle.listItem}>HTML</li>
					<li className={MenuStyle.listItem}>CSS</li>
					<li className={MenuStyle.listItem}>JavaScript</li>
				</ul>
			) : null}
		</div>
	);
}

export default Menu;
