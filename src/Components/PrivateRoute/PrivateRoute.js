import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = useAuth();
	if (loading)
		return (
			<div className='d-flex align-items-center justify-content-center m-5'>
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.displayName ? (
					children
				) : (
					<>
						{alert('You need to Login First to Visit this Page')}
						<Redirect
							to={{
								pathname: '/login',
								state: { from: location },
							}}
						/>
					</>
				)
			}
		/>
	);
};

export default PrivateRoute;
