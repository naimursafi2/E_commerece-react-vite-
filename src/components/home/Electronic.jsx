import React from "react";
import { Link } from "react-router";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
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
  autoplay: true,
  speed: 2000,
  arrows:false,
  autoplaySpeed: 3000,
  cssEase: "linear",

  appendDots: (dots) => (
    <div className="relative">
      <ul className="flex items-center bottom-7 md:bottom-10 left-1/2 -translate-x-1/2 gap-0.5 md:gap-2 absolute">
        {dots}
      </ul>
    </div>
  ),

  customPaging: () => (
    <div className="w-2 md:w-4 h-2 md:h-3 bg-slate-300 rounded-full"></div>
  ),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <section className="pb-10 md:pb-28">
      <div className="container">
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading text-lg md:text-2xl">
            Top <span>Electronics Brands</span>
          </h2>
          <Link to="/" className="flex items-center text-nowrap text-md md:text-xl">
            View all
            
          </Link>
        </div>
        <div className=" gap-4 ">
          <Slider {...settings}>
            {marketing.map((items, index) => (
              <div key={index} className="px-0.5 md:px-2">
                <Link to="/" className="h-32">
                  <img
                    src={items.image}
                    alt="electronic"
                    className="block w-full h-auto rounded-lg"
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
