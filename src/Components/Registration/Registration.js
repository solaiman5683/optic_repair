import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Col, Form, Row } from 'reactstrap';

const Registration = () => {
	const handleSubmit = e => {
		e.preventDefault();
		console.log('Hello From Registration');
	};
	return (
		<div
			className='container'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '100px 0',
			}}>
			<Row xs='2' className='p-5 shadow rounded align-items-center'>
				<Col className='py-5'>
					<h2 style={{ color: '#5A5A5A' }}>Resister Your Account Now!</h2>
					<Form onSubmit={handleSubmit} className='py-3 pe-5 me-5'>
						<input
							type='text'
							className='form-control p-3 mb-2'
							placeholder='Enter Your Name'
						/>
						<input
							type='email'
							className='form-control p-3 mb-2'
							placeholder='Enter Your Email*'
						/>
						<input
							type='password'
							className='form-control p-3 mb-2'
							placeholder='Enter Your Password*'
						/>
						<input
							type='submit'
							className='form-control bg-primary text-light fs-5 p-3 mb-2'
							value='Register'
						/>
						<div className='d-flex'>
							<Link to='/login' className='px-3 mt-2 py-3 btn'>
								Already Registered ?
							</Link>
							<span className='btn px-4 py-3 mt-2 ms-auto rounded-pill shadow-sm'>
								<FcGoogle />
								{' Signup    with google'}
							</span>
						</div>
					</Form>
				</Col>
				<Col>
					<img
						src='https://monnampo.sirv.com/Images/secure.svg'
						alt=''
						width='100%'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Registration;
