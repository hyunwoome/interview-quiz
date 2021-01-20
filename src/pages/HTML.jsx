import React, { useState } from 'react';
import Header from '../components/sections/Header';
import Main from '../components/sections/Main';
import Footer from '../components/sections/Footer';
import data from '../data/HTML.json';

function HTML() {
	const [number, setNumber] = useState(0);
	function handleChildClick(number) {
		setNumber(number);
	}
	for (let i = 0; i < data.length; i++) {
		return (
			<>
				<Header />
				<Main quiz={data[number]} onChildClick={handleChildClick} />
				<Footer />
			</>
		);
	}
}

export default HTML;
