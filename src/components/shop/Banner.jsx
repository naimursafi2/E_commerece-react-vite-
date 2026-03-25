import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../ui/SlideArrows";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
     <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-10">
        <ul className="flex justify-center items-center m-0 p-0">{dots}</ul>
      </div>
    ),
      customPaging: () => (
      <div className="h-2  md:h-3 rounded-full bg-white/70 border border-gray-400 transition-all duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // small device e dots hidden
          arrows: false,
          autoplay: true, // auto slide cholbe
          speed: 3000,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <div className="relative">
          <Slider {...settings}>
            
            <div>
              <img
                className="w-full rounded-2xl h-"
                src="/watch-banner.png"
                alt="watch"
              />
            </div>
            <div>
              <img className="w-full  h-full" src="/mans-shirt-banner.png" alt="banner" />
            </div>
            <div>
              <img className="w-full  h-full" src="/kitchen-banner.png" alt="banner" />
            </div>
            <div>
              <img className="w-full  h-full" src="/mans-shirt-banner.png" alt="banner" />
            </div>
            
            
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Banner;
