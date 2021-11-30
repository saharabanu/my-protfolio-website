import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Sahara</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link  className="item" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="item" as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link className="item" as={HashLink} to="/home#projects">projects</Nav.Link>
                        <a href="https://drive.google.com/file/d/1kk5QGOW7vbRWc-QJXhWOV8NUqJes5Bep/view" target="_blank" rel="noreferrer" className="item" style={{textDecoration:'none'}}> My Resume</a>
                        <Nav.Link className="item" as={HashLink} to="/home#contact">Contact</Nav.Link>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;