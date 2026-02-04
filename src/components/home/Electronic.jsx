import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Electronic = () => {
  const marketing = [
    {
      image: "/electronic1.png",
    },
    {
      image: "/electronic2.png",
    },
    {
      image: "/electronic3.png",
    },
    {
      image: "/electronic1.png",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
   
   appendDots: (dots) => (
  <div className="relative">
    <ul className="flex absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-20">
      {dots}
    </ul>
  </div>
),

    customPaging: (i) => (
      <div className="w-2 md:w-4 h-2 md:h-4 bg-slate-500  rounded-full flex justify-center items-center">
     
      </div>
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
        <div className=" gap-4 ">
          <Slider {...settings}>
            {marketing.map((items, index) => (
              <div key={index}>
                <Link className="h-32">
                  <img
                    src={items.image}
                    alt="electronic"
                    className="w-auto max-w-full"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Electronic;
