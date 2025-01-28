import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import cart from "../../images/clothe.png";
import CategoryRound from "../home/CategoryRound";
import SubTitleCard from "./SubTitleCard";
import "../../App.css";

// <Image className={"bg-info "+ rounded }src={categoryImg} />

function CardComponnet({ title, button, rounded, categoryImg, bgColor }) {
  return (
    // xs={2} sm={3} md={4} lg={6} xl={7}
    <Fragment>
      <Col
        xs="6"
        sm="4"
        md="3"
        lg="2"
        className="d-flex flex-column    "
      >
        <div className="d-flex justify-content-center align-content-center  h-100  ">
          <Image className={"bg-info w-50  " + rounded} src={categoryImg} />
        </div>
        <div className="text-center">{title}</div>
      </Col>
    </Fragment>
  );
}

export default CardComponnet;
