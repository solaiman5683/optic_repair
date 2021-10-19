import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { BiLogIn, BiLogOutCircle } from 'react-icons/bi';
import { RiUserSharedLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Navigation = ({ logo }) => {
	const { user, logout } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='shadow-sm fs-5'>
			<Navbar color='light' light expand='md'>
				<div className='container'>
					<NavLink to='/'>
						<img src={logo} alt='Optic Repair' width='75px' />
					</NavLink>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='ms-auto d-flex align-items-center' navbar>
							<NavItem>
								<NavLink className='nav-link' to='/home'>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className='nav-link' to='/blogs'>
									Blogs
								</NavLink>
							</NavItem>
							{!(user.displayName || user.email) && (
								<>
									<NavItem title='Login'>
										<NavLink className='nav-link' to='/login'>
											<BiLogIn /> Login
										</NavLink>
									</NavItem>
									<NavItem title='Signup'>
										<NavLink className='nav-link' to='/registration'>
											<RiUserSharedLine /> Signup
										</NavLink>
									</NavItem>
								</>
							)}
							{(user?.displayName || user?.email) && (
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle
										nav
										className='ms-auto d-flex align-items-center'>
										{user?.displayName && (
											<>
												{!user?.photoURL && user?.displayName}
												<img
													src={user?.photoURL}
													alt={user?.displayName.slice(
														0,
														user?.displayName.indexOf(' ')
													)}
													width='50px'
													className='ps-2 rounded-circle'
												/>
											</>
										)}
										{!(user?.displayName || user?.photoURL) && (
											<FaRegUserCircle />
										)}
									</DropdownToggle>
									<DropdownMenu className='border-0 rounded shadow' right>
										<div className='text-center'>
											<img
												className='rounded-circle'
												src={user?.photoURL}
												alt=''
											/>
										</div>
										<DropdownItem divider />
										<DropdownItem className='text-center'>
											{user?.displayName ? user.displayName : 'Anonymous User'}
										</DropdownItem>
										<DropdownItem
											className='text-center text-danger'
											onClick={() => logout()}>
											<BiLogOutCircle /> Logout
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							)}
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Navigation;
