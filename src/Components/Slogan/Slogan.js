import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

const Slogan = () => {
	return (
		<div
			style={{
				backgroundImage:
					'url("https://monnampo.sirv.com/Images/slogan-area-bg.jpg")',
			}}>
			<div
				style={{
					backgroundColor: 'rgba(3, 193, 143, 0.9)',
					padding: '80px 50px',
				}}>
				<div className='container d-flex'>
					<h1 className='text-light fw-bold w-75'>
						Are you looking for a eye care consultation?
					</h1>
					<button
						className='ms-auto rounded-pill ps-3 border-0'
						style={{
							backgroundColor: 'rgb(70, 73, 83)',
							fontSize: '18px',
							display: 'flex',
							alignItems: 'center',
						}}>
						<p className='ps-2 pe-4 fs-4 m-0 text-light'>Book Appointment</p>
						<MdDoubleArrow
							className='p-3 fs-3 rounded-circle'
							style={{
								backgroundColor: '#02C18D',
								color: '#fff',
								cursor: 'pointer',
								height: '2em',
								width: '2em',
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Slogan;
