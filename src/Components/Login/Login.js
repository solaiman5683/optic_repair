import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';
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
		setError,
	} = useAuth();
	const history = useHistory();
	const handleSubmit = e => {
		e.preventDefault();
		handleLogin(email, password)
			.then(res => {
				setUser(res.user);
				setLoading(false);
				history.push('/home');
			})
			.catch(err => {
				setError(err.message);
			});
	};
	const handleGoogle = () => {
		handleGoogleLogin().then(res => {
			setUser(res.user);
			setLoading(false);
		});
	};
	if (user.displayName || user.email) {
		history.push('/home');
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '80%',
				margin: 'auto',
			}}>
			<div
				style={{
					width: '40%',
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
	);
};

export default Login;
