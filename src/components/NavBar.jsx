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
  NavbarText,
} from 'reactstrap';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">&lt;Scott Huang&gt;</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="text-end" navbar>
            <NavItem>
              <NavLink target="_blank" href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/scotth527">
                GitHub
              </NavLink>
            </NavItem>
     
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;