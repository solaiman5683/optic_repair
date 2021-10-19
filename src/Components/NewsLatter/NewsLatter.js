import React, { useState } from 'react';
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter } from 'react-icons/bs';
import { MdDoubleArrow } from 'react-icons/md';
import { Col, Row } from 'reactstrap';
const NewsLatter = () => {
	let [msg, setMsg] = useState('');
	const handleClick = () => {
		setMsg('Thank you for Messaging us');
	};
	return (
		<div style={{ backgroundColor: '#353742', color: '#fff' }}>
			<div className='container py-3 fs-3'>
				<Row xs={1} md={2}>
					<Col>
						<div className='text-center my-3' style={{ color: '#02C18D' }}>
							<BsGoogle className='mx-2' />
							<BsFacebook className='mx-2' />
							<BsInstagram className='mx-2' />
							<BsTwitter className='mx-2' />
						</div>
					</Col>
					<Col>
						<div
							className='ms-auto rounded-pill ps-4 my-3'
							style={{
								backgroundColor: 'rgb(70, 73, 83)',
								fontSize: '18px',
								display: 'flex',
								alignItems: 'center',
							}}>
							<input
								type='text'
								placeholder={msg ? msg : 'Send your message'}
								className='bg-transparent border-0 text-light py-2'
							/>
							<MdDoubleArrow
								className='p-3 fs-3 ms-auto rounded-circle'
								style={{
									backgroundColor: '#02C18D',
									color: '#fff',
									cursor: 'pointer',
									height: '2em',
									width: '2em',
								}}
								onClick={handleClick}
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default NewsLatter;
