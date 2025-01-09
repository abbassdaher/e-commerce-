import React from "react";
import Container from "react-bootstrap/Container";
import {Form,Nav,Row,Col,Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo.png";
function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className="w-50" src={logo} alt="logo" /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav ">
        <Nav>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
        </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <i class="fa fa-user-circle-o" aria-hidden="true"> Login</i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i class="fa fa-shopping-cart" aria-hidden="true"> Cart</i>
            </Nav.Link>

          </Nav>
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
