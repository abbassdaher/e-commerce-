import React, { Fragment } from "react";
import NavBarComponent from "../../component/utility/NavBarComponent";
import SwiperComponent from "../../component/home/SwiperComponent";
import CardComponnet from "../../component/utility/CardComponnet";
import CategoryRound from "../../component/home/CategoryRound";
import CardProducts from "../../component/utility/CardProducts";
import BestSelling from "../../component/home/BestSelling";
import SaleSection from "../../component/home/SaleSection";
import NewProducts from "../../component/home/NewProducts";
import laptop from "../../images/labtop.png";
import pro1 from "../../images/prod3.png";
import ProductTag from "../../component/home/ProductTag";
import Footer from "../../component/utility/Footer";
import SubTitleCard from "../../component/utility/SubTitleCard";
import { Container } from "react-bootstrap";

function HomePages() {
  return (
    <Fragment>
      <SwiperComponent />
      <Container>
        <SubTitleCard
          title={"category"}
          button={"more"}
          path={"/AllCategory"}
        />
        <CategoryRound title="t-shirt" />

        <BestSelling picture={pro1} />
        <SaleSection />
        <SubTitleCard
          title="New products"
          button={"more"}
          path={"/AllNewProduct"}
        />
        <NewProducts picture={laptop} />
        <SubTitleCard title={"Brands"} button={"more"} path={"/AllBrands"} />
        <ProductTag />
      </Container>
    </Fragment>
  );
}

export default HomePages;
