import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { BiLogIn } from 'react-icons/bi';
import { RiUserSharedLine } from 'react-icons/ri';

const Navigation = ({ logo }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='shadow-sm fs-5'>
			<Navbar color='light' light expand='md'>
				<div className='container'>
					<NavbarBrand>
						<img src={logo} alt='Optic Repair' width='75px' />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='ms-auto' navbar>
							<NavItem>
								<NavLink href='/components/'>Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='https://github.com/reactstrap/reactstrap'>
									GitHub
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav>Options</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem title='Login'>
								<NavLink href='https://github.com/reactstrap/reactstrap'>
									<BiLogIn />
								</NavLink>
							</NavItem>
							<NavItem title='Signup'>
								<NavLink href='https://github.com/reactstrap/reactstrap'>
									<RiUserSharedLine />
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Navigation;
