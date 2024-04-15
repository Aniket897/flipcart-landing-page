import { smartphoneDelas } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CaretRight } from "@phosphor-icons/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SmartPhoneDeals = () => {
  return (
    <div className="items-center gap-3 bg-white w-[80vw] p-4 pb-12">
      <div className="pb-8 flex items-center justify-between">
        <p className="text-2xl font-bold text-gray-700">
          Best deals on smartphones
        </p>
        <button className="rounded-full bg-blue-600 text-white p-1">
          <CaretRight size={20} weight="light" />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{}}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6.1,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {smartphoneDelas.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full border h-fit aspect-[3/4] p-1 py-2 text-center cursor-pointer">
              <div className="w-full flex items-center justify-center">
                <img
                  className="w-full object-contain aspect-[1/1] hover:scale-105"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{item.name}</p>
                <p>inc with offers</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmartPhoneDeals;
