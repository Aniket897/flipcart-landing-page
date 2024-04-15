import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";

const slides = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fd78c56eb85bafd5.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3af219e83718806b.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bd9f4343af54fad1.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6d230c8f55f6c661.png?q=20",
];

const MainSlider = () => {

  return (
    <div className="w-[97vw] mx-auto mt-[10px]">
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-full">
              <img className="w-full" src={item} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
