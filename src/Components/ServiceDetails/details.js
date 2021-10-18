import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import useData from '../../Hooks/useData';

const ServiceDetails = () => {
	const service = useData();
	const { id } = useParams();
	const filteredService = service.find(s => s._id === id);
	return (
		<Container>
			<Link to='/' className='btn'>
				Back to Home
			</Link>
			<div
				style={{ minHeight: '80vh' }}
				className='d-flex align-items-center justify-content-center'>
				<div className='p-5 shadow'>
					<h1 className='text-center py-5'>
						Hello {filteredService?.treatment}
					</h1>
				</div>
			</div>
		</Container>
	);
};

export default ServiceDetails;
