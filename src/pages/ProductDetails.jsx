import React from "react";
import { useState, useEffect, useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaCaravan, FaFacebook } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router";
import Slider from "react-slick";
import Button from "../components/ui/Button";
const ProductDetails = () => {
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
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-1">
            {/* Mega Image */}
            <div className="bg-secondary flex justify-center items-center border border-primary/30 rounded-3xl">
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="w-full h-full max-w-4/5"
              >
                <div>
                  <img src="/mobile4.png" alt="mobile" className="w-full" />
                </div>
                <div>
                  <img src="/mobile2.png" alt="mobile" className="w-full" />
                </div>
                <div>
                  <img src="/mobile3.png" alt="mobile" className="w-full " />
                </div>
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
              <div>
                <div className="mt-5 border border-primary/30 mx-2 flex  w-fit items-center justify-center rounded-xl">
                  <img src="/mobile4.png" alt="mobile " className="w-4/5" />
                </div>
              </div>
              <div>
                <div className="mt-5 border border-primary/30 mx-2 flex w-fit  items-center justify-center rounded-xl">
                  <img src="/mobile2.png" alt="mobile" className="w-4/5" />
                </div>
              </div>
              <div>
                <div className="mt-5 border border-primary/30 mx-2 flex w-fit  items-center justify-center rounded-xl">
                  <img src="/mobile3.png" alt="mobile" className="w-4/5" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-span-2 ">
            <div className="flex justify-between items-center w-full ">
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
                <p className="text-xl "> Add to Compare</p>
              </Link>
            </div>
            <h2 className="text-4xl font-bold">Samsung Plus 14 4G</h2>
            <div className="flex gap-12 text-xl mt-4 font-bold">
              <p className="relative after:absolute after:w-0.5 after:h-full after:bg-primary/40 after:top-0 after:-right-6">
                ৳22,300 <span className="text-primary">(Cash Price)</span>
              </p>
              <p className="relative after:absolute after:w-0.5 after:h-full after:bg-primary/40 after:top-0 after:-right-6">
                Availability: in stock
              </p>
              <p>Code: AGL28551</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="border border-primary/30 mt-10 p-4 rounded-2xl">
                <p className="text-2xl font-bold mb-2">Color:</p>
                <div className="flex gap-4 text-xl mb-3 font-bold">
                  <Link className="border p-3 border-primary/30 hover:shadow hover:border-green-500  rounded-full text-primary ">
                    Lime Green
                  </Link>
                  <Link className="border p-3 border-primary/30 hover:shadow hover:border-green-500 rounded-full text-primary ">
                    Blue Green
                  </Link>
                </div>

                <div className="flex gap-4 text-xl font-bold">
                  <Link className="border p-3 border-primary/30 hover:shadow hover:border-green-500 rounded-full text-primary ">
                    Lime Green
                  </Link>
                  <Link className="border p-3 border-primary/30 hover:shadow hover:border-green-500 rounded-full text-primary ">
                    Lime Green
                  </Link>
                </div>
              </div>
              <div className="border border-primary/30 mt-10 p-4 rounded-2xl">
                <p className="text-2xl font-bold mb-2">Storage:</p>
                <div className="flex gap-4 text-xl mb-3 font-normal">
                  <Link className="border p-3 border-primary/20 hover:shadow hover:border-green-500  rounded-full text-primary ">
                    6/128GB
                  </Link>
                  <Link className="border p-3 border-primary/20 hover:shadow hover:border-green-500 rounded-full text-primary ">
                    8/128GB
                  </Link>
                  <Link className="border p-3 border-primary/20 hover:shadow hover:border-green-500 rounded-full text-primary ">
                    8/256GB
                  </Link>
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
            <div className="cursor-pointer mt-17 text-center bg-amber-500 text-white rounded-2xl py-3">
              <button className="cursor-pointer text-2xl">Pre Order</button>
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
        <div className="grid grid-cols-3">
          <div className="col-span-2">
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
            <p className="text-3xl font-normal mt-3">Specification</p>
            <table className="w-full">
              <tbody className="border border-primary/30 rounded-full">
                <tr className="border-b border-primary/30 ">
                  <td>Model</td>
                  <td>Redmi Note 14 4G</td>
                </tr>
                <tr >
                  <td>Model</td>
                  <td>Redmi Note 14 4G</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
