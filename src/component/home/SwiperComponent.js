import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
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
        <div className="  d-flex flex-direction-column align-content-around ">
          <img
            className="img-slider     "
            src={slider1}
            alt="author"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="  d-flex flex-direction-column justify-content-around">
      <img className="img-slider" src={slider2} alt="author" />
      </div>
        
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
