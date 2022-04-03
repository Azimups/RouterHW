import React from 'react'
import {Navbar} from 'reactstrap'
import {NavbarBrand} from 'reactstrap'
import {NavbarToggler} from 'reactstrap'
import {Collapse} from 'reactstrap'
import {Nav} from 'reactstrap'
import {NavItem} from 'reactstrap'
import {NavLink} from 'reactstrap'
import {UncontrolledDropdown} from 'reactstrap'
import {DropdownMenu} from 'reactstrap'
import {DropdownToggle} from 'reactstrap'
import {DropdownItem} from 'reactstrap'
import {NavbarText} from 'reactstrap'
function Header() {
    return (
        <>
        <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                    Home
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                        <NavLink href="/Home">
                            Phone
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/Detail">
                            Detail
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                    </Collapse>
                </Navbar>
        </div>
        </>
        
    )
}

export default Header
