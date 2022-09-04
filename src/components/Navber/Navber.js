import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import'./Navber.css';
import logo from '../../images/f_logo.png'



const Navber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home" ><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="ms-auto fs-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">AboutMe</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#testimonial" className='active color'>Testimonial</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navber;