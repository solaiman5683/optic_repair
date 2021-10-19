import React, { useState } from 'react';
import Header from '../../Header/Header';
import Services from '../../Services/Services';
import { BsFacebook } from 'react-icons/bs';
import { MdDoubleArrow } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
const Home = () => {
	let [msg, setMsg] = useState('');
	const handleClick = () => {
		setMsg('Thank you for Messaging us');
	};
	return (
		<div style={{ minHeight: '100vh' }}>
			<Header />
			<Services />

			<div style={{ backgroundColor: '#353742', color: '#fff' }}>
				<div className='container py-3 fs-3 d-flex'>
					<div>
						<FcGoogle className='mx-2' />
						<BsFacebook className='mx-2' />
						<BsFacebook className='mx-2' />
						<BsFacebook className='mx-2' />
					</div>
					<div
						className='ms-auto rounded-pill ps-4'
						style={{
							backgroundColor: 'rgb(70, 73, 83)',
							fontSize: '18px',
							display: 'flex',
							alignItems: 'center',
						}}>
						<input
							type='text'
							placeholder={msg ? msg : 'Send your message'}
							className='bg-transparent border-0 text-light py-2'
						/>
						<MdDoubleArrow
							className='p-3 fs-3 rounded-circle'
							style={{
								backgroundColor: '#02C18D',
								color: '#fff',
								cursor: 'pointer',
								height: '2em',
								width: '2em',
							}}
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
