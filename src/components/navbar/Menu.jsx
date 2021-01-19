import React, { useState } from 'react';
import MenuStyle from './Menu.module.css';
import Dropdown from '../../assets/images/dropdown.png';

function Menu() {
	const [menu, setMenu] = useState(false);
	const [select, setSelect] = useState('HTML');

	const transferText = (e) => {
		setSelect(e.target.innerText);
		setMenu(!menu);
	};

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className={MenuStyle.menu}>
			<button className={MenuStyle.button} onClick={toggleMenu}>
				{select}{' '}
				<img className={MenuStyle.dropdown} src={Dropdown} alt="dropdown" />
			</button>
			{menu ? (
				<menu className={MenuStyle.list}>
					<li className={MenuStyle.listItem}>
						<button className={MenuStyle.button} onClick={transferText}>
							HTML
						</button>
					</li>
					<li className={MenuStyle.listItem}>
						<button className={MenuStyle.button} onClick={transferText}>
							CSS
						</button>
					</li>
					<li className={MenuStyle.listItem}>
						<button className={MenuStyle.button} onClick={transferText}>
							JavaScript
						</button>
					</li>
				</menu>
			) : null}
		</div>
	);
}

export default Menu;
