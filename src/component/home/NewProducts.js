import React, { Fragment } from "react";
import SubTitleCard from "../utility/SubTitleCard";
import { Container, Row, Col } from "react-bootstrap";
import CardProducts from "../utility/CardProducts";
import SideFiter from "../utility/SideFilter";

function NewProducts({ pictuer }) {
  return (
    <Fragment>
      <Row className="justify-content-center mt-2 ">
        <Col className=" " style={{ maxWidth: "20%" }}>
          <div className="position-fixed m-2">
            <SideFiter/>
          </div>
        </Col>
        <Col className="" style={{ maxWidth: "80%" }}>
          <Row className="justify-content-center mt-2 ">
            <CardProducts pictuer={pictuer} />
            <CardProducts pictuer={pictuer} />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default NewProducts;
