import React, { Fragment } from "react";
import NavBarComponent from "../../component/utility/NavBarComponent";
import SwiperComponent from "../../component/home/SwiperComponent";
import CardComponnet from "../../component/utility/CardComponnet";
import CategoryRound from "../../component/home/CategoryRound";
import CardProducts from "../../component/utility/CardProducts";
import BestSelling from "../../component/home/BestSelling";
import SaleSection from "../../component/home/SaleSection";

function HomePages() {
  return (
    <Fragment>
      <NavBarComponent />
      <SwiperComponent />
      <CategoryRound title="t-shirt" />
      <BestSelling />
      <SaleSection/>
      

    </Fragment>
  );
}

export default HomePages;
