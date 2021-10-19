import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'reactstrap';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {
		user,
		handleGoogleLogin,
		setUser,
		setLoading,
		handleLogin,
		error,
		setError,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	setError('');
	const redirectURI = location.state?.from || '/home';
	const handleSubmit = e => {
		e.preventDefault();
		handleLogin(email, password)
			.then(res => {
				setUser(res.user);
				setLoading(false);
				history.push(redirectURI);
			})
			.catch(err => {
				setError(err.message);
			});
	};
	const handleGoogle = () => {
		handleGoogleLogin()
			.then(res => {
				setUser(res.user);
				setLoading(false);
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
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div className='row'>
				<div className='col-md-2 col-lg-3 col-xxl-4'></div>
				<div className='col-md-8 col-lg-6 col-xxl-4'>
					<div
						style={{
							margin: '50px',
							justifyContent: 'space-between',
						}}
						className='shadow rounded overflow-hidden'>
						<div style={{ backgroundColor: '#D7E1E6' }}>
							<img
								src='https://monnampo.sirv.com/Images/b13.jpg'
								width='100%'
								alt=''
							/>
							<Form className='p-4 pt-0' onSubmit={handleSubmit}>
								<input
									type='email'
									className='form-control p-3 mb-2'
									placeholder='Enter your Email '
									onBlur={e => setEmail(e.target.value)}
								/>
								<input
									type='password'
									className='form-control p-3 mb-3'
									placeholder='Enter your Password*'
									onBlur={e => setPassword(e.target.value)}
								/>
								<input
									type='submit'
									className='btn btn-primary w-25'
									value='Login'
								/>
								{error && (
									<span className='text-danger px-3 m-0 fs-5'>
										{error === 'Firebase: Error (auth/user-not-found).' &&
											'User Not Found, Please try again!'}
									</span>
								)}
								<Link to='/registration' className='px-3 btn'>
									Don't Registered yet ?
								</Link>
								<div className='py-4'>
									<span
										className='btn px-4 py-3 rounded-pill shadow'
										onClick={handleGoogle}>
										<FcGoogle />
										{' Login with google'}
									</span>
								</div>
							</Form>
						</div>
					</div>
				</div>
				<div className='col-md-2 col-lg-3 col-xxl-4'></div>
			</div>
		</div>
	);
};

export default Login;
