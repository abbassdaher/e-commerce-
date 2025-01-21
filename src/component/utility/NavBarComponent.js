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
      expand={'md'}
    >
      <Container>
      <Navbar.Brand href="#home" className=" d-inline-block m-0 flex-nowrap">
          <img
            className=" w-100 me-auto"
            width={40}
            height={40}
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        
        <Form.Control
          type="search"
          placeholder="Search"
          className="w-50 "
          aria-label="Search"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav  " className="flex-nowrap" />
        
        <Navbar.Collapse  className=" " id="basic-navbar-nav  ">
          <nav expand={'md'} className=" d-flex flex-row  justify-content-around wrap">
            
            <Nav.Link className="" href="#home">
              <i class="fa fa-user-circle-o  " aria-hidden="true">
                Login
              </i>
            </Nav.Link>

            <Nav.Link className="" href="#link">
              <i class="fa fa-shopping-cart" aria-hidden="true">
                Cart
              </i>
            </Nav.Link>
            
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             //   <NavDropdown.Item href="#action/3.2">
//             //     Another action
//             //   </NavDropdown.Item>
//             //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             //   <NavDropdown.Divider />
//             //   <NavDropdown.Item href="#action/3.4">
//             //     Separated link
//             //   </NavDropdown.Item>
//              </NavDropdown>
