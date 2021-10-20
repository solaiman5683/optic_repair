import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'reactstrap';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { user, handleGoogleLogin, setUser, setLoading, handleLogin } =
		useAuth();

	const location = useLocation();
	const history = useHistory();

	const redirectURI = location.state?.from || '/home';
	const handleSubmit = e => {
		e.preventDefault();
		handleLogin(email, password)
			.then(res => {
				setUser(res.user);
				setLoading(false);
				setError('');
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
				setError('');
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
					<div className='shadow rounded overflow-hidden my-5'>
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
								{error && (
									<p className='text-danger text-center'>
										{error === 'Firebase: Error (auth/user-not-found).'
											? 'User Not Found, Please try again!'
											: error === 'Firebase: Error (auth/internal-error).'
											? 'Internal error, please try again'
											: error === 'Firebase: Error (auth/wrong-password).'
											? 'Wrong Password, Please try again'
											: 'Something went wrong. Please try again'}
									</p>
								)}
								<input
									type='submit'
									className='btn btn-primary w-25'
									value='Login'
								/>

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
