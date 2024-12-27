import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={30}
      direction="horizontal"
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      scrollbar={{
        el: ".swiper-scrollbar",
      }}
      modules={[Pagination]}
      className="swiper"
    >
      <SwiperSlide>
        <img
          className="img-slider"
          src={process.env.PUBLIC_URL + "/images/slider1.png"}
          alt="author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img-slider"
          src={process.env.PUBLIC_URL + "/images/slider4.png"}
          alt="author"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
