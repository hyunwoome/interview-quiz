import React from 'react';
import MainStyle from './Main.module.css';

function Main({ quiz }) {
	const { id, question, answer, reference } = quiz;
	return (
		<main className={MainStyle.main}>
			<div className={MainStyle.innerMain}>
				<section className={MainStyle.question}>
					<article className={MainStyle.questionCount}>123</article>
					<article className={MainStyle.questionText}>
						<p>
							<span>Q</span>
							<span>
								{id}. {question}
							</span>
						</p>
					</article>
				</section>
				<section className={MainStyle.answer}>
					<article className={MainStyle.answerText}>
						<p>A.</p>
						<p>{answer}</p>
						<article className={MainStyle.reference}>
							<p>
								출처 : <a href={reference}>{reference}</a>
							</p>
						</article>
					</article>
				</section>
				<section className={MainStyle.utils}>유틸창</section>
			</div>
		</main>
	);
}

export default Main;
