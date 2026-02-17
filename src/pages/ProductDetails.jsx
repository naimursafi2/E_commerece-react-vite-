import React from "react";
import { useState, useEffect, useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useParams } from "react-router";
import Slider from "react-slick";
import Button from "../components/ui/Button";
import { useGetProductDetailsQuery } from "../services/Api";
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductDetailsQuery(id);
  console.log(data);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const settings = {
    dots: false,
  };
  return (
    <section className="py-120">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="col-span-1">
            {/* Mega Image */}
            <div className="bg-secondary flex justify-center items-center border border-primary/30 rounded-3xl">
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="w-full h-full max-w-4/5"
              >
                {data?.images?.map((img) => (
                  <div key={img}>
                    <img src={img} alt="mobile" className="w-full h-full" />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Images List */}
            <Slider
              {...settings}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {data?.images?.map((img) => (
                <div key={img}>
                  <div className="mt-5 border border-primary/30 mx-2 flex  w-fit items-center justify-center rounded-xl">
                    <img src={img} alt="mobile " className="w-4/5" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-span-2 ">
            <div className="hidden md:flex justify-between items-center w-full ">
              <Link to="">
                <img
                  src="/Xiaomi-logo.png"
                  alt="Xiaomi"
                  className="w-2/3 h-1/2"
                />
              </Link>
              <Link
                to=""
                className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition font-bold"
              >
                <MdCompareArrows className="text-xl" />
                <p className="text-xl"> Add to Compare</p>
              </Link>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold">{data?.title}</h2>
            <div className="flex gap-12 text-md lg:text-xl mt-4 font-bold ">
              <p className="relative after:absolute after:w-0.5 after:h-full after:bg-primary/40 after:top-0 after:-right-6">
                ${data?.price}{" "}
                <span className="text-primary">(Cash Price)</span>
              </p>
              <p className="relative after:absolute after:w-0.5 after:h-full after:bg-primary/40 after:top-0 after:-right-6">
                Availability:
                <span className="text-primary">{data?.availabilityStatus}</span>
              </p>
              <p>
                Brand: <span className="text-primary">{data?.brand}</span>
              </p>
            </div>
            <div className=" w-xs md:w-lg lg:w-xl  gap-5">
              <div className="border bg-secondary/30 shadow-xs border-primary/30 mt-10 p-4  rounded-2xl">
                <p className="text-2xl font-bold mb-2">Product details of:</p>
                <div className="flex gap-4 text-xl mb-3 font-normal">
                  <ul>
                    <li>
                      <p>
                        Category:
                        <span className="text-primary">{data?.category}</span>
                      </p>
                      <p>
                        Stock:
                        <span className="text-primary">{data?.stock}</span>
                      </p>
                      <p>
                        Weight:
                        <span className="text-primary">{data?.weight}</span>
                      </p>
                      <p>
                        Warranty:
                        <span className="text-primary">
                          {data?.warrantyInformation}
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold mt-9 mb-2 corser">
              Select Quantity:
            </p>
            <input
              type="number"
              className="bg-secondary outline-0 py-1 px-1 text-primary text-center"
            />
            <div className="grid grid-cols-2 gap-4 cursor-pointer mt-17 text-center text-white rounded-2xl py-3">
              <Button
                size="md"
                className="cursor-pointer bg-green-600 hover:bg-green-800 "
              >
                Buy Now
              </Button>
              <Button size="md" variant="orange" className="cursor-pointer   ">
                Add to Cart
              </Button>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-7">
                <Link
                  to=""
                  className="flex mt-7 items-center bg-amber-100 p-4 rounded-2xl gap-3"
                >
                  <RiDiscountPercentLine className="text-2xl" />
                  <p className="text-xl ">
                    EMI Available <span className="font-bold">View Plans</span>
                  </p>
                </Link>
                <Link
                  to="https://wa.me/8801816795593"
                  className="flex mt-7 items-center bg-green-100 p-4 rounded-2xl gap-3"
                >
                  <BsWhatsapp className="text-2xl text-green-900 font-bold" />
                  <p className="text-xl font-semibold">Whatsapp</p>
                </Link>
              </div>
            </div>
            <p className="flex items-center gap-2 mt-5 bg-secondary/30 p-3 rounded-xl border border-primary/30  text-lg">
              <TbTruckDelivery className="text-2xl " />
              Delivery Timescale:
              <span className="font-semibold">3-5 Days</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className=" mt-17  text-white rounded-2xl py-3  flex gap-4">
            <Button size="md" variant="orange" className="cursor-pointer">
              Specifition
            </Button>
            <Button size="md" variant="orange" className="cursor-pointer">
              Description
            </Button>
            <Button size="md" variant="orange" className="cursor-pointer">
              Warranty
            </Button>
          </div>
          <Link to="" className="text-3xl  font-normal ">
            Description: <br />
            <span className="text-2xl mt-2 text-primary/80">
              {data?.description}
            </span>
          </Link>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
