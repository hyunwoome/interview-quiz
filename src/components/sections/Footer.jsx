import React from 'react';
import FooterStyle from './Footer.module.css';
import Github from '../../assets/images/github.png';
import Mail from '../../assets/images/mail.png';

function Footer() {
	return (
		<footer className={FooterStyle.footer}>
			<div className={FooterStyle.innerFooter}>
				<span className={FooterStyle.copyright}>ⓒ 2021 hyunwoome</span>
				<div className={FooterStyle.linkLogo}>
					<a href="https://github.com/hyunwoome">
						<img src={Github} alt="github" />
					</a>
					<a href="mailto:hyunwoome@icloud.com">
						<img src={Mail} alt="mail" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
