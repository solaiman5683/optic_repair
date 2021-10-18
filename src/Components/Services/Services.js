import React from 'react';
import useData from '../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {
	const service = useData();
	console.log(service);
	return (
		<div className='container mb-5'>
			<h1 className='text-center py-5'>Treatments We Offer</h1>
			<hr />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3,1fr)',
					gridGap: '20px',
				}}>
				{service.map(svc => (
					<Service service={svc} key={svc._id} />
				))}
			</div>
		</div>
	);
};

export default Services;
