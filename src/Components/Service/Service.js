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
		<div>
			<Card className='border-0 shadow-sm'>
				<CardImg top width='100%' src={service?.image} alt='Card image cap' />
				<CardBody>
					<CardTitle tag='h5'>{service?.treatment}</CardTitle>
					<CardSubtitle tag='h6' className='mb-2 text-muted'>
						{service?.description.slice(0, 100)} ...
					</CardSubtitle>
				</CardBody>
				<CardFooter className='d-flex align-items-center border-0'>
					<span>Fee: ${service?.fee}</span>
					<Link
						to={`service/${service._id}`}
						className='nav-link text-dark ms-auto pe-0'>
						Read More <FaAngleDoubleRight />
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Service;
