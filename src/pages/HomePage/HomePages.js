import React, { Fragment } from "react";
import NavBarComponent from "../../component/utility/NavBarComponent";
import SwiperComponent from "../../component/home/SwiperComponent";
import CardComponnet from "../../component/utility/CardComponnet";
import CategoryRound from "../../component/utility/CategoryRound";

function HomePages() {
  return (
    <Fragment>
      <NavBarComponent />
      <SwiperComponent />
      <CategoryRound/>
    </Fragment>
  );
}

export default HomePages;
