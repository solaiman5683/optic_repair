import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Header = () => {
	const style = {
		backgroundImage:
			"url('https://monnampo.sirv.com/Images/78FFF2FE2354953A68DEDB5232_1593193663436.jpg')",
		backgroundPosition: 'bottom center',
		height: '600px',
	};
	return (
		<div style={style}>
			<Container className='h-100'>
				<Row xs={2} className='h-100 align-items-center'>
					<Col>
						<h1 className='display-3'>Caring For Your Vision</h1>
						<p className='fs-5 w-75 ps-2'>
							We are committed to your pet's health and well being by providing
							them compassionate and excellent care.
						</p>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
};

export default Header;
