import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import item from "../../images/item.png";

function CardProducts({ picture }) {
  return (
    <Col
      className=" d-flex justify-content-center shadow mt-2 "
      xs="6"
      sm="4"
      md="3"
      lg="2"
    >
      <Card style={{ width: "10rem" }}>
        <Card.Img className="" variant="top" src={picture ? picture : item} />
        <Card.Text>
          <i className="fa fa-heart-o text-danger" aria-hidden="true"></i>
        </Card.Text>

        <Card.Text>Some quick example text to build</Card.Text>

        <Card.Text className="d-flex justify-content-between">
          <span>450 $</span>
          <span>
            3.5
            <i
              className="fa fa-star text-warning font-bold "
              aria-hidden="true"
            ></i>
          </span>
        </Card.Text>
      </Card>
    </Col>
  );
}

export default CardProducts;
