import React from "react";
import cart from "../../images/clothe.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fragment } from "react";
import SubTitleCard from "./SubTitleCard";
import CardComponnet from "./CardComponnet";

function CategoryRound() {
  return (
    <Container>
      <SubTitleCard title={"category"} button={"more"}/>
      <Row className="justify-content-center mt-2">
        <CardComponnet rounded="rounded-circle"/>
        <CardComponnet rounded="rounded-circle"/>
        <CardComponnet rounded="rounded-circle"/>
        <CardComponnet rounded="rounded-circle"/>
        <CardComponnet rounded="rounded-circle"/>
        <CardComponnet rounded="rounded-circle"/>
      </Row>
    </Container>
  );
}

export default CategoryRound;
