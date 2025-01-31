import React from "react";
import SubTitleCard from "../utility/SubTitleCard";
import { Container, Row } from "react-bootstrap";
import CardProducts from "../utility/CardProducts";

function NewProducts({pictuer}) {
  return (
    <Container>
      
      <Row className="justify-content-center mt-2 ">
        <CardProducts pictuer={pictuer} />
        <CardProducts pictuer={pictuer} />
        <CardProducts />
        <CardProducts />
      </Row>
    </Container>
  );
}

export default NewProducts;
