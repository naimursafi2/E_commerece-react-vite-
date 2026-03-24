import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../ui/SlideArrows";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
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
          arrows: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <div className="relative banner-slider">
          <Slider {...settings}>
            <div>
              <img
                className="w-full"
                src="/protinshek-banner.png"
                alt="banner"
              />
            </div>
            <div>
              <img
                className="w-full"
                src="/bed-banner.png"
                alt="banner-barger"
              />
            </div>
            <div>
              <img className="w-full" src="/egg-banner.png" alt="banner" />
            </div>
            <div>
              <img
                className="w-full"
                src="/lipstik-sent-banner.png"
                alt="banner"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Banner;
