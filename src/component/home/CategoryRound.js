import React from "react";
import cart from "../../images/clothe.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fragment } from "react";
import SubTitleCard from "../utility/SubTitleCard";
import CardComponnet from "../utility/CardComponnet";

function CategoryRound({title}) {
  return (
    <Container>
      <SubTitleCard title={"category"} button={"more"}/>
      <Row className=" justify-content-center mt-2">
        <CardComponnet rounded="rounded-circle" title={title}/>
        <CardComponnet rounded="rounded-circle" title={title}/>
        <CardComponnet rounded="rounded-circle" title={title}/>
        <CardComponnet rounded="rounded-circle" title={title}/>
        
      </Row>
    </Container>
  );
}

export default CategoryRound;
