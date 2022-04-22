import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.inite";
import logo from "../../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            {<img height={30} src={logo} alt="" />}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link eventKey={2} as={Link} to="/service/add">
                    Add Service
                  </Nav.Link>
                  <Nav.Link eventKey={2} as={Link} to="/service/manage">
                    Manage
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
              <Nav.Link as={Link} to="/about">
                about
              </Nav.Link>
              {user ? (
                <Nav.Link
                  onClick={() => signOut(auth)}
                  eventKey={2}
                  as={Link}
                  to="/login"
                >
                  sign Out
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} as={Link} to="/login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
