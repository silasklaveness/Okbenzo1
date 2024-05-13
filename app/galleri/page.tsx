"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Pictures = () => {
  return (
    <div className="relative">
      <Image
        src="/pics/background2.jpg"
        layout="fill"
        objectFit="cover"
        className="z-0"
        alt="background"
        unoptimized
      />
      <div className="container mx-auto px-4 md:px-12 py-8 relative z-10">
        <Swiper
          className="mb-12"
          spaceBetween={30}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/pics/haircut${i + 1}.jpg`}
                className="rounded shadow-lg"
                unoptimized
                width={400}
                height={400}
                alt={`Slide ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Pictures;
