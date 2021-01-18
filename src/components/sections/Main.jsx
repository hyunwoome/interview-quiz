import React from 'react';
import MainStyle from './Main.module.css';

function Main() {
	return (
		<div className={MainStyle.main}>
			<div className={MainStyle.innerMain}>
				<div className={MainStyle.question}>
					<div className={MainStyle.questionText}>
						<p>Lorem ipsum dolor sit, </p>
					</div>
				</div>
				<div className={MainStyle.answer}>
					<div className={MainStyle.answerText}>
						<p>Lorem ipsum dolor sit, </p>
					</div>
				</div>
				<div className={MainStyle.utils}>유틸창</div>
			</div>
		</div>
	);
}

export default Main;
