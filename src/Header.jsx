import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/"> Home </Link>
          <Link className="nav-link" to="/example"> Example </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
