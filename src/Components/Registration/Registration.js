import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Col, Form, Row } from 'reactstrap';
import { useAuth } from '../../Context/AuthContext';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	useEffect(() => {
		document.title =
			'Registration | Optic Repair - The Specialized Eye Care Hospital';
	}, []);
	const {
		user,
		setUser,
		setLoading,
		handleGoogleLogin,
		handleRegister,
		updateUser,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirectURI = location.state?.from || '/home';
	const handleSubmit = e => {
		e.preventDefault();
		handleRegister(email, password)
			.then(res => {
				setUser(res.user);
				updateUser(name);
				setLoading(false);
				history.push('/login');
			})
			.catch(err => {
				setError(err.message);
			});
	};

	const loginGoogle = () => {
		handleGoogleLogin()
			.then(res => {
				setUser(res.user);
				setLoading(false);
				history.push(redirectURI);
			})
			.catch(err => {
				setError(err.message);
			});
	};

	if (user.displayName || user.email) {
		history.push(redirectURI);
	}

	return (
		<div
			className='container'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '100px 0',
			}}>
			<Row xs={1} md={2} className='p-5 shadow rounded align-items-center'>
				<Col className='py-5'>
					<h2 style={{ color: '#5A5A5A' }}>Resister Your Account Now!</h2>
					<Form onSubmit={handleSubmit} className='py-3'>
						<input
							type='text'
							className='form-control p-3 mb-2'
							placeholder='Enter Your Name'
							onBlur={e => setName(e.target.value)}
						/>
						<input
							type='text'
							className='form-control p-3 mb-2'
							placeholder='Enter Your Email*'
							onBlur={e => setEmail(e.target.value)}
						/>
						<input
							type='password'
							className='form-control p-3 mb-2'
							placeholder='Enter Your Password*'
							onBlur={e => setPassword(e.target.value)}
						/>
						<input
							type='submit'
							className='form-control bg-primary text-light fs-5 p-3 mb-2'
							value='Register'
						/>
						{error && (
							<p className='text-danger text-center'>
								{error === 'Firebase: Error (auth/invalid-email).'
									? 'Invalid Email Address, Please try again!'
									: error ===
									  'Firebase: Password should be at least 6 characters (auth/weak-password).'
									? 'Password should be at least 6 characters'
									: error === 'Firebase: Error (auth/email-already-in-use).'
									? 'Email Already Exist, Try Another Email.'
									: error === 'Firebase: Error (auth/popup-closed-by-user).'
									? 'You closed the popup. Please wait for it to appear.'
									: 'Something went wrong, Please try again!'}
							</p>
						)}
						<div className='d-flex'>
							<Link to='/login' className='px-3 mt-2 py-3 btn'>
								Already Registered ?
							</Link>

							<span
								className='btn px-4 py-3 mt-2 ms-auto rounded-pill shadow-sm'
								onClick={loginGoogle}>
								<FcGoogle />
								{' Signup with google'}
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
