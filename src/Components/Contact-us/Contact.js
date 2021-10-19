import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
	return (
		<div>
			<div className='container p-5' style={{ color: '#353742' }}>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<h1 className='fw-bold'>
							<span style={{ color: '#02C18D' }}>We love</span> to hear from our
							customers
						</h1>
						<h5 className='fw-bold py-3'>
							<FiPhoneCall
								className='p-3 ms-auto fs-3 rounded-circle'
								style={{
									backgroundColor: '#02C18D',
									color: '#fff',
									cursor: 'pointer',
									height: '2em',
									width: '2em',
								}}
							/>{' '}
							<span className='p-3'>+8801854785698</span>
						</h5>
						<h5 className='fw-bold py-3'>
							<MdOutlineAlternateEmail
								className='p-3 ms-auto fs-3 rounded-circle'
								style={{
									backgroundColor: '#02C18D',
									color: '#fff',
									cursor: 'pointer',
									height: '2em',
									width: '2em',
								}}
							/>{' '}
							<span className='p-3'>info@optic_repair.com</span>
						</h5>
						<h5 className='fw-bold py-3'>
							<ImLocation2
								className='p-3 ms-auto fs-3 rounded-circle'
								style={{
									backgroundColor: '#02C18D',
									color: '#fff',
									cursor: 'pointer',
									height: '2em',
									width: '2em',
								}}
							/>{' '}
							<span className='p-3'>Jatrabari, Dhaka, Bangladesh</span>
						</h5>
					</div>
					<div className='col-md-6 p-5 shadow rounded'>
						<div className='row'>
							<div className='col-md-6'>
								<input
									type='text'
									className='form-control p-3 border-0 rounded shadow-sm  m-2'
									placeholder='First Name'
								/>
							</div>
							<div className='col-md-6'>
								<input
									type='text'
									className='form-control p-3 border-0 rounded shadow-sm  m-2'
									placeholder='Last Name'
								/>
							</div>
						</div>
						<input
							type='text'
							className='form-control p-3 border-0 rounded shadow-sm  m-2'
							placeholder='Your Email'
						/>
						<textarea
							placeholder='Your message type here.'
							className='form-control p-3 border-0 rounded shadow-sm  m-2'
							rows='3'></textarea>
						<button
							className='form-control p-3 border-0 text-light fs-5 rounded shadow-sm  m-2 mt-3'
							style={{ background: '#02C18D' }}>
							Send Message
						</button>
					</div>
				</div>
			</div>
			<div style={{ width: '100%', height: '300px' }}>
				<MapContainer
					center={[23.7028596, 90.4587598]}
					zoom={13}
					scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={[23.7028596, 90.4587598]}>
						<Popup>
							Our location <br /> To Contact us Visit Here
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default Contact;
