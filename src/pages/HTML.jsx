import React, { useState } from 'react';
import Header from '../components/sections/Header';
import Main from '../components/sections/Main';
import Footer from '../components/sections/Footer';
import data from '../data/HTML.json';

function HTML() {
	const [number, setNumber] = useState(0);
	const dataLength = data.length - 2;
	const increaseChildClick = (number) => {
		setNumber((number += 1));
	};

	const decreaseChildClick = (number) => {
		setNumber((number -= 1));
	};

	return (
		<>
			<Header />
			<Main
				quiz={data[number]}
				length={dataLength}
				onIncreaseChildClick={increaseChildClick}
				onDecreaseChildClick={decreaseChildClick}
			/>
			<Footer />
		</>
	);
}

export default HTML;
