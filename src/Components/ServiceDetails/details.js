import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import useData from '../../Hooks/useData';
import { FcHome } from 'react-icons/fc';

const ServiceDetails = () => {
	const service = useData();
	const { id } = useParams();
	const item = service.find(s => s._id === id);
	useEffect(() => {
		document.title = item?.treatment;
	}, [item?.treatment]);
	return (
		<Container>
			<div
				style={{ margin: '50px auto' }}
				className='d-flex align-items-center justify-content-center'>
				<div className='shadow rounded overflow-hidden'>
					<Row xs={1} lg={2}>
						<Col>
							<img src={item?.image} alt='' width='100%' height='100%' />
						</Col>
						<Col className='p-4'>
							<h3 className='pt-5'>{item?.treatment}</h3>
							<p className='text-muted w-75 py-3'>{item?.description}</p>
							<h4>Charge : ${item?.fee}</h4>
							<Link to='/' className='nav-link text-dark'>
								<FcHome className='pe-1 fs-1' />
								Back to Home
							</Link>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};

export default ServiceDetails;
