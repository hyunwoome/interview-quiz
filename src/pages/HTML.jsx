import React from 'react';
import Header from '../components/sections/Header';
import Main from '../components/sections/Main';
import Footer from '../components/sections/Footer';
import data from '../data/HTML.json';

function HTML() {
	for (let i = 0; i < data.length; i++) {
		return (
			<>
				<Header />
				<Main quiz={data[i]} />
				<Footer />
			</>
		);
	}
}

export default HTML;
