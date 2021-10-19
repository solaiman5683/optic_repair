import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { Col, Row } from 'reactstrap';

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
					backgroundColor: 'rgba(3, 193, 143, 0.9)',
					padding: '50px 0',
				}}>
				<div className='container p-5'>
					<Row xs={1} md={2} className='align-items-center'>
						<Col>
							<h1 className='text-light fw-bold w-75'>
								Are you looking for a eye care consultation?
							</h1>
						</Col>
						<Col className='text-center'>
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
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Slogan;
