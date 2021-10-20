import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import NewsLatter from '../../NewsLatter/NewsLatter';
import Services from '../../Services/Services';
import Slogan from '../../Slogan/Slogan';

const Home = () => {
	useEffect(() => {
		document.title = 'Optic Repair - The Specialized Eye Care Hospital';
	}, []);
	return (
		<div>
			<Header />
			<Slogan />
			<Services />
			<NewsLatter />
		</div>
	);
};

export default Home;
