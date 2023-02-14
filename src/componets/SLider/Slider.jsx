import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import {SliderProducts} from "../../data/products";

//import css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className={"s-container"}>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        slidesPerGroup={1}
        modules={[Pagination,Navigation]}
        className="my-Swiper"
        navigation={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span> {slide.name} </span>
                <span> {slide.detail} </span>
              </div>
              <span> {slide.price}$ </span>
              <div>Shop Now</div>
            
            </div>

            <img className="img-p" src={slide.img} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
