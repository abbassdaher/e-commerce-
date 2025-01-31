import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import CardBarnds from "../../component/home/CardBarnds";
import brandImage1 from "../../images/brand1.png";
import cartImg1 from "../../images/clothe.png";
import cartImg2 from "../../images/sale.png";
import cartImg3 from "../../images/labtop.png";
import cartImg4 from "../../images/pic.png";
import CardComponnet from "../../component/utility/CardComponnet";
import CategoryRound from "../../component/home/CategoryRound";

function AllCategory() {
  return (
    <Fragment>
    <CategoryRound title={"t-shirt"}/>
    <CategoryRound title={"t-shirt"}/>
    <CategoryRound title={"t-shirt"}/>
    <CategoryRound title={"t-shirt"}/>
    <CategoryRound title={"t-shirt"}/>
    
    </Fragment>
  );
}

export default AllCategory;
