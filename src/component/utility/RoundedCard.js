import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import cart from "../../images/clothe.png";

function RoundedCard() {
  return (
    // xs={2} sm={3} md={4} lg={6} xl={7}
    <Fragment>
      <div   className="container  d-flex   flex-wrap justify-content-center ">
        <div className="px-2"  >
          <Image className="bg-info flex-fill " src={cart} roundedCircle />
          <div className="d-flex justify-content-center text-capitalize font-weight-bold " >t-shirt</div>
        </div>
        <div className=""  >
          <Image className="bg-info flex-fill " src={cart} roundedCircle />
          <div className="d-flex justify-content-center text-capitalize font-weight-bold" >t-shirt</div>
        </div>
        <div className=""  >
          <Image className="bg-info flex-fill " src={cart} roundedCircle />
          <div className="d-flex justify-content-center text-capitalize font-weight-bold" >t-shirt</div>
        </div>
        <div className=""  >
          <Image className="bg-info flex-fill " src={cart} roundedCircle />
          <div className="d-flex justify-content-center text-capitalize font-weight-bold" >t-shirt</div>
        </div>
        <div className=""  >
          <Image className="bg-info flex-fill " src={cart} roundedCircle />
          <div className="d-flex justify-content-center text-capitalize font-weight-bold" >t-shirt</div>
        </div>
      </div>
    </Fragment>
  );
}

export default RoundedCard;
