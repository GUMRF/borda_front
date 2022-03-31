import React from 'react';
import StyledButton from '../Styles/NavBarButtons'
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function Example() {
  return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="home">MakaraCTF</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="challanges">Challanges</Nav.Link>
      <Nav.Link href="scoreboard">Scoreboard</Nav.Link>
      <Nav.Link href="FAQ">FAQ</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="login">Login</Nav.Link>
      <Nav.Link href="register">SignUp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  )
}