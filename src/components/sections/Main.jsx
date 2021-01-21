import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainStyle from './Main.module.css';
import Back from '../../assets/images/back.png';
import Next from '../../assets/images/next.png';
import DisableBack from '../../assets/images/disable-back.png';
import DisableNext from '../../assets/images/disable-next.png';

function Main({ quiz, length, onIncreaseChildClick, onDecreaseChildClick }) {
	const { id, question, answer, reference } = quiz;
	const [number, setNumber] = useState(0);

	console.log(`length: ${length}`);
	console.log(`number: ${number}`);

	const increaseHandleClick = () => {
		setNumber(number + 1);
		onIncreaseChildClick(number);
	};

	const decreaseHandleClick = () => {
		setNumber(number - 1);
		onDecreaseChildClick(number);
	};

	return (
		<main className={MainStyle.main}>
			<div className={MainStyle.innerMain}>
				<section className={MainStyle.question}>
					<article className={MainStyle.questionText}>
						{number > 0 ? (
							<button
								className={MainStyle.button}
								onClick={decreaseHandleClick}
							>
								<img className={MainStyle.back} src={Back} alt="Back" />
							</button>
						) : (
							<button className={MainStyle.button}>
								<img className={MainStyle.back} src={DisableBack} alt="Back" />
							</button>
						)}
						<span>
							Q{id}. {question}
						</span>
						{number <= length ? (
							<button
								className={MainStyle.button}
								onClick={increaseHandleClick}
							>
								<img className={MainStyle.next} src={Next} alt="Next" />
							</button>
						) : (
							<button className={MainStyle.disabledButton} disabled>
								<img className={MainStyle.next} src={DisableNext} alt="Next" />
							</button>
						)}
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
