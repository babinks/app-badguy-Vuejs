import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navbarlink =()=>(
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">LDV</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="salles">Gestion Salles</Nav.Link>
            <Nav.Link href="edt">Emploi du temps</Nav.Link>
        </Nav>
    </Navbar>
);

export default Navbarlink;