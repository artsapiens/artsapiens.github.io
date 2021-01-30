import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import useWindowDimensions from '../utils/dimensionHelper';

const navItems = [
    {
        label: "Home",
        route: "/"
    },
    // {
    //     label: "Skills",
    //     route: "/skills"
    // },
    {
        label: "Projects",
        route: "/projects"
    },
    // {
    //     label: "Contact",
    //     route: "/contact"
    // }
    ]

const CustomNav = () => {
    const {width} = useWindowDimensions();
    const navbarBgColor = width < 768 ? 'white' : 'transparent';
    return (
        <div>
            <Navbar bg="transparent" expand="md" className="mt-2">
                <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={`bg-${navbarBgColor}`}>
                    <Nav className="mx-auto">
                        {navItems.map(item =>
                            <Nav.Item className="text-center navLink" key={item.label}>
                                <NavLink
                                    exact
                                    className="color-customBlue w-100 text-decoration-none"
                                    activeClassName="font-weight-bold"
                                    to={item.route}
                                >
                                    {item.label}
                                </NavLink>
                            </Nav.Item>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default CustomNav;
