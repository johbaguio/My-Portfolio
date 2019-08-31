import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import initialsPic from '../Static/Images/jb2.png';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <React.Fragment>
            <Navbar className='navbar' collapseOnSelect expand="lg"  variant="light">
                <NavLink to="/"><img src={initialsPic} alt='initials of Johanna Baguio' className='initials-pic' /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto navtext">
                        <NavLink to="/About" className='navbar-text'>About</NavLink>
                        <NavLink to="/Resume" className='navbar-text'>Resume</NavLink>
                        <NavLink to="/Projects" className='navbar-text'>Projects</NavLink>
                        
                    </Nav>
                    <Nav>
                        <NavLink to="/Contact" className='navbar-text'>Contact</NavLink>
                        <NavLink to="/" className='navbar-text'>Home</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr className='hr-nav'/>
        </React.Fragment>






    )
}


export default Header;