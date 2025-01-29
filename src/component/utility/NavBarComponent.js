import React from "react";
import Container from "react-bootstrap/Container";
import { Form, Nav, Row, Col, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo.png";
function NavBarComponent() {
  return (
    // expand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'}

    <Navbar
      className="bg-body-tertiary d-flex flex-row align-content-between  "
      expand={"md"}
    >
      <Container>
        <Navbar.Brand href="/" className=" d-flex  flex-nowrap m-0 ">
          <img className="" width={30} height={30} src={logo} alt="logo" />
        </Navbar.Brand>

        <Form.Control
          type="search"
          placeholder="Search"
          className="w-75 "
          aria-label="Search"
        />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav  "
          className="flex-nowrap"
        />

        <Navbar.Collapse className="  nav-collapse  " id="basic-navbar-nav  ">
          <Nav
            expand={"md"}
            className=" d-flex flex-row  justify-content-around wrap"
          >
            
            <Nav.Link className="" href="/login">
              <i class="fa fa-user-circle-o  " aria-hidden="true">
                Login
              </i>
            </Nav.Link>
            <Nav.Link className="" href="/cart">
              <i class="fa fa-shopping-cart" aria-hidden="true">
                Cart
              </i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
