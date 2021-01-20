import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainStyle from './Main.module.css';
import Back from '../../assets/images/back.png';
import Next from '../../assets/images/next.png';

function Main({ quiz, onChildClick }) {
	const { id, question, answer, reference, check } = quiz;
	const [number, setNumber] = useState(0);
	function handleClick() {
		setNumber(number + 1);
		onChildClick(number);
	}
	return (
		<main className={MainStyle.main}>
			<div className={MainStyle.innerMain}>
				<section className={MainStyle.question}>
					<article className={MainStyle.questionText}>
						<button className={MainStyle.button}>
							<img className={MainStyle.back} src={Back} alt="back button" />
						</button>
						<span>
							Q{id}. {question}
						</span>
						<button className={MainStyle.button} onClick={handleClick}>
							<img className={MainStyle.next} src={Next} alt="back button" />
						</button>
					</article>
				</section>
				<section className={MainStyle.answer}>
					<article className={MainStyle.answerText}>
						<p>{answer}</p>
						<article className={MainStyle.reference}>
							<p>
								출처 : <a href={reference}>{reference}</a>
							</p>
						</article>
					</article>
				</section>
			</div>
		</main>
	);
}

Main.propTypes = {
	id: PropTypes.number,
	question: PropTypes.string,
	answer: PropTypes.string,
	reference: PropTypes.string,
	check: PropTypes.bool,
};

export default Main;
