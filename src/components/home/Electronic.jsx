import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import ElectronicCard from "../ui/ElectronicCard";
import { NextArrow, PrevArrow } from "../ui/SlideArrows";
import Slider from "react-slick";

const Electronic = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="flex bottom-3 md:bottom-20  left-10 md:left-24  gap-2 justify-center">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 md:w-4 h-2 md:h-4 bg-red-800  rounded-full flex justify-center items-center">{i + 1}</div>
    ),
  };
  return (
    <section className="pb-28">
      <div className="container">
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading">
            Top <span>Electronics Brands</span>
          </h2>
          <Link to="/" className="flex items-center ">
            View all
            <BiChevronRight className="text-2xl text-brand" />
          </Link>
        </div>
        <div className=" gap-4">
          <Slider {...settings}>
            <ElectronicCard />
            <ElectronicCard />
            <ElectronicCard />
            <ElectronicCard />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Electronic;
