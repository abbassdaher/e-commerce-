import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import cart from "../../images/clothe.png";
import CategoryRound from "./CategoryRound";
import SubTitleCard from "./SubTitleCard";

function CardComponnet({ title, button,rounded}) {
  return (
    // xs={2} sm={3} md={4} lg={6} xl={7}
    <Fragment>
        <Col xs="6" sm="4" md="3" lg="2">
          <div className="text-center">
            <Image className={"bg-info w-50 "+ rounded}src={cart} />
            <div>{title}</div>
          </div>
        </Col>
    </Fragment>
  );
}

export default CardComponnet;
