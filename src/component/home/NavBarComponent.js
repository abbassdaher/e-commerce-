import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
function NavBarComponent() {
  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form inline>
        <InputGroup>
          <div className="">
            <i class="fa fa-user-circle-o mr-4" aria-hidden="true">
              <a className="text-decoration-none text-black " href="">
                login
              </a>
            </i>
          </div>
          <div className="mx-2">
            <i class="fa fa-shopping-cart" aria-hidden="true">
              <a className="text-decoration-none text-black " href="">cart</a>
            </i>
          </div>
        </InputGroup>
      </Form>
      <Form className=" d-block  mx-1" inline>
        <Row>
          <Col xs="100%">
            <Form.Control type="text" placeholder="Search" className="" />
          </Col>
          <Col xs="auto"></Col>
        </Row>
      </Form>
      <Form inline>
        <InputGroup>
          <img className="w-50" src={logo} alt="logo" />
        </InputGroup>
      </Form>
    </Navbar>
  );
}

export default NavBarComponent;
