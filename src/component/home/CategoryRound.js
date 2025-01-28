import React from "react";
import cartImg1 from "../../images/clothe.png";
import cartImg2 from "../../images/sale.png";
import cartImg3 from "../../images/labtop.png";
import cartImg4 from "../../images/pic.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fragment } from "react";
import SubTitleCard from "../utility/SubTitleCard";
import CardComponnet from "../utility/CardComponnet";

function CategoryRound({ title }) {
  return (
    <Container>
      <SubTitleCard title={"category"} button={"more"} />
      <Row className=" justify-content-center mt-2">
        <CardComponnet
          rounded="rounded-circle"
          title={title}
          categoryImg={cartImg1}
        />
        <CardComponnet
          rounded="rounded-circle"
          title={title}
          categoryImg={cartImg2}
        />
        <CardComponnet
          rounded="rounded-circle"
          title={title}
          categoryImg={cartImg3}
        />
        <CardComponnet
          rounded="rounded-circle"
          title={title}
          categoryImg={cartImg4}
        />
      </Row>
    </Container>
  );
}

export default CategoryRound;
