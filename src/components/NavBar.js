import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return ( 
    <Navbar bg = "dark" variant = "dark" expand = "lg">
        <Navbar.Brand href = "/"> GXC CRUD </Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/add">Añadir Nuevo Libro</Nav.Link>
                <Nav.Link href="/">Inicio</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;