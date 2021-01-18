import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import LogoStyle from './Logo.module.css';

function Logo() {
	return (
		<div className={LogoStyle.logo}>
			<img className={LogoStyle.logoImage} src={LogoImage} alt="logo" />
			<h4>Interview Quiz</h4>
		</div>
	);
}

export default Logo;
