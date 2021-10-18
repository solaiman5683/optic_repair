import React from 'react';
import {
	Card,
	CardBody,
	CardFooter,
	CardImg,
	CardSubtitle,
	CardTitle,
} from 'reactstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	return (
		<Card>
			<CardImg top width='100%' src={service?.image} alt='Card image cap' />
			<CardBody>
				<CardTitle tag='h5'>{service?.treatment}</CardTitle>
				<CardSubtitle tag='h6' className='mb-2 text-muted'>
					{service?.treatment}
				</CardSubtitle>
			</CardBody>
			<CardFooter className='d-flex align-items-center'>
				<span>Fee: ${service?.fee}</span>
				<Link to={service._id} className='nav-link ms-auto'>
					Read More <FaAngleDoubleRight />
				</Link>
			</CardFooter>
		</Card>
	);
};

export default Service;
