import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider4.png";

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={30}
      direction="horizontal"
      loop={true}
      pagination={{
        clickable: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      scrollbar={{
        el: ".swiper-scrollbar",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      style={{
        "--swiper-pagination-color": "#7bccdc",
        "--swiper-pagination-bullet-size": "10px",
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="swiper"
    >
      <SwiperSlide className="d-flex ">
        <div className=" d-flex  slider">
          <div className="   align-content-center  ">
            <span className=" captionstext font-weight-bold text-lg">
              <h1 className="">Saleeeeeeeeeee up to 50%</h1>
            </span>
          </div>
        </div>
        <img className="bg-slider  img-slider" src={slider1} alt="author" />
      </SwiperSlide>
      <SwiperSlide className="d-flex ">
        <div className=" d-flex  slider">
          <div className=" align-content-center  ">
            <span className=" captionstext font-weight-bold text-lg">
              <h1>Saleeeeeeeeeee up to 50%</h1>
            </span>
          </div>
        </div>
        <img className="bg-slider img-slider" src={slider2} alt="author" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
