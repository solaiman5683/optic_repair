import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.css';

const Footer = ({ logo }) => {
	return (
		<div className='footer-container bg-dark text-light fixed-bottom pt-5'>
			<Container>
				<Row xs='4' className='align-items-center'>
					<Col className='text-center'>
						<img src={logo} alt='Footer Logo' width='150px' />
					</Col>
					<Col>
						<p>
							Optic Repair is a well known Eye Care Clinic in Dhaka, Bangladesh.
							We Have Some highly qualified Doctors. <br />
							For more information Please contact us.
						</p>
					</Col>
					<Col></Col>
					<Col>
						<h4 className='text-center'>Important Links</h4>
						<hr />
						<Row xs='2'>
							<Col>
								<div className='footer-links'>
									<h6>About us</h6>
									<h6>Contact</h6>
									<h6>Eye Surgery</h6>
								</div>
							</Col>
							<Col>
								<div className='footer-links'>
									<h6>Our Doctor's</h6>
									<h6>Our Blogs</h6>
									<h6>Our Services</h6>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<p className='text-center copyright'>
					Copyright &copy;2021 OpticRepair developed by{' '}
					<a href='https://www.facebook.com/solaiman.sh6/'>Sulaiman Hosain</a>
				</p>
			</Container>
		</div>
	);
};

export default Footer;
