import React, { Fragment } from "react";
import { Container, Row,Col } from "react-bootstrap";
import SubTitleCard from "../utility/SubTitleCard";
import CardBarnds from "./CardBarnds";
import brandImage1 from "../../images/brand1.png";
import brandImage2 from "../../images/brand2.png";
import brandImage3 from "../../images/brand3.png";
import brandImage4 from "../../images/brand2.png";

function ProductTag() {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <CardBarnds picture={brandImage1} />
        <CardBarnds picture={brandImage2} />
        <CardBarnds picture={brandImage3} />
        <CardBarnds picture={brandImage4} />
        
      </Row>
    </Fragment>
  );
}

export default ProductTag;
