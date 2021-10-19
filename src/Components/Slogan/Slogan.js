import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

const Slogan = () => {
	return (
		<div
			style={{
				backgroundImage:
					'url("https://monnampo.sirv.com/Images/slogan-area-bg.jpg")',
				backgroundAttachment: 'fixed',
			}}>
			<div
				style={{
					backgroundColor: 'rgba(3, 193, 143, 0.92)',
					padding: '50px 0',
				}}>
				<div className='container p-5'>
					<div className='row align-items-center'>
						<div className='col-md-8'>
							<h1 className='text-light fw-bold w-75'>
								Are you looking for a eye care consultation?
							</h1>
						</div>
						<div className='col-md-4 text-center'>
							<span
								className='ms-auto rounded-pill ps-3 border-0'
								style={{
									backgroundColor: 'rgb(70, 73, 83)',
									display: 'flex',
									alignItems: 'center',
								}}>
								<p className='ps-2 pe-4 m-0 text-light'>Book Appointment</p>
								<MdDoubleArrow
									className='p-3 ms-auto fs-3 rounded-circle'
									style={{
										backgroundColor: '#02C18D',
										color: '#fff',
										cursor: 'pointer',
										height: '2em',
										width: '2em',
									}}
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slogan;
