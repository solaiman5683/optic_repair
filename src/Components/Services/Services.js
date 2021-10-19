import React from 'react';
import useData from '../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {
	const service = useData();
	return (
		<div
			style={{
				backgroundImage: 'url("https://monnampo.sirv.com/Images/bg1.png")',
				backgroundAttachment: 'fixed',
				backfaceVisibility: '0',
			}}>
			<div className='container pb-5'>
				<h1 className='text-center py-5 treatment'>Treatments We Offer</h1>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					{service.map(svc => (
						<Service service={svc} key={svc._id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
