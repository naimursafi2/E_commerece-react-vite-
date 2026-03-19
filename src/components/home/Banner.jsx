import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
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
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className=" flex items-center bottom-10 md:bottom-10  left-10 md:left-24  gap-2 absolute">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className=" hidden md:flex w-3 md:w-4 h-3 md:h-4 bg-theme rounded-full"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // small device e dots hidden
          arrows: false,
          autoplay: true, // auto slide cholbe
          speed: 1000,
    autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container ">
        <Slider {...settings}>
          <div>
            <img className="w-full" src="/banner-2.png" alt="banner" />
          </div>
          <div>
            <img
              className="w-full"
              src="/banner-barger.png"
              alt="banner-barger"
            />
          </div>
          <div>
            <img className="w-full" src="/banner.png" alt="banner" />
          </div>
          <div>
            <img className="w-full" src="/banner-2.png" alt="banner" />
          </div>
          <div>
            <img
              className="w-full"
              src="/banner-barger.png"
              alt="banner-barger"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
