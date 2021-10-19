import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from './404.svg';
import { FcHome } from 'react-icons/fc';
const NotFound = () => {
	return (
		<div
			style={{ height: '80vh' }}
			className='d-flex flex-column text-center align-items-center justify-content-center'>
			<div>
				<img src={errorImage} alt='Page Not Found' width='60%' />
			</div>
			<div>
				<Link
					to='/home'
					className='d-flex align-items-center py-5 text-primary fs-2 btn '>
					<FcHome className='pe-1 fs-1' /> Back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
