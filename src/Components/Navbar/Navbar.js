import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { BiLogIn, BiUserCircle } from 'react-icons/bi';
import { RiUserSharedLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navigation = ({ logo }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='shadow-sm fs-5'>
			<Navbar color='light' light expand='md'>
				<div className='container'>
					<NavbarBrand>
						<NavLink to='/'>
							<img src={logo} alt='Optic Repair' width='75px' />
						</NavLink>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='ms-auto' navbar>
							<NavItem>
								<NavLink className='nav-link' to='/home'>
									Home
								</NavLink>
							</NavItem>
							<NavItem title='Login'>
								<NavLink className='nav-link' to='login'>
									<BiLogIn />
								</NavLink>
							</NavItem>
							<NavItem title='Signup'>
								<NavLink className='nav-link' to='signup'>
									<RiUserSharedLine />
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav>
									<BiUserCircle />
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Navigation;
