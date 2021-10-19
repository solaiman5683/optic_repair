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
						<p className='text-muted w-75 ps-2'>
							Eye Care Specialist Services That You Can Trust. We are committed
							you to provide best Care for your Eyes and your vision. Eyes are
							the most important thing of your life.
						</p>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
};

export default Header;
