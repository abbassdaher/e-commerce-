import React from "react";
import laptops from "../../images/laptops.png";
import { Col, Container, Image, Row } from "react-bootstrap";

function SaleSection() {
  return (
    <Container>
    <Row className="soldArea rounded my-4 d-flex align-items-center ">
      <Col xs="6"sm="6"md="6"lg="6"xl="6"  className="w-50 h-100  ">
      <img className="w-100 h-100" src={laptops} alt="laptops"></img>

      </Col>

      
      <Col xs="6"sm="6"md="6"lg="6"xl="6" className=" w-50 align-content-center" >
        <span className="align-content-center  soldAreaText ">
          Sale up to 80 ! off laptops
        </span>
        </Col>

      
    </Row>
    </Container>
  );
}

export default SaleSection;
