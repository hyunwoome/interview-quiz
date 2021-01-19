import React from 'react';
import MainStyle from './Main.module.css';

function Main({ id, question, answer, reference }) {
	return (
		<main className={MainStyle.main}>
			<div className={MainStyle.innerMain}>
				<section className={MainStyle.question}>
					<article className={MainStyle.questionID}>{id}</article>
					<article className={MainStyle.questionText}>
						<p>{question}</p>
					</article>
				</section>
				<section className={MainStyle.answer}>
					<article className={MainStyle.answerText}>
						<p>{answer}</p>
					</article>
					<article className={MainStyle.reference}>
						<p>{reference}</p>
					</article>
				</section>
				<section className={MainStyle.utils}>유틸창</section>
			</div>
		</main>
	);
}

export default Main;
