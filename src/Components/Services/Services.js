import React from 'react';
import useData from '../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {
	const service = useData();
	return (
		<div className='container mb-5'>
			<h1 className='text-center py-5 treatment'>Treatments We Offer</h1>
			<div className='row row-cols-1 row-cols-md-3 g-4'>
				{service.map(svc => (
					<Service service={svc} key={svc._id} />
				))}
			</div>
		</div>
	);
};

export default Services;
