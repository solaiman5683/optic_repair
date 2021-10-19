import React from 'react';
import Header from '../../Header/Header';
import NewsLatter from '../../NewsLatter/NewsLatter';
import Services from '../../Services/Services';
import Slogan from '../../Slogan/Slogan';

const Home = () => {
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
