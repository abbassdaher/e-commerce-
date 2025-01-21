import React, { Fragment } from "react";
import NavBarComponent from "../../component/utility/NavBarComponent";
import SwiperComponent from "../../component/home/SwiperComponent";
import RoundedCard from "../../component/utility/RoundedCard";
function HomePages() {
  return (
    <Fragment>
      <NavBarComponent />
      <SwiperComponent />
      <RoundedCard/>
    </Fragment>
  );
}

export default HomePages;
