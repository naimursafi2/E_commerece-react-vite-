import React, { useEffect, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link, useParams } from "react-router";
import Slider from "react-slick";
import Button from "../components/ui/Button";
import { useGetProductDetailsQuery } from "../services/Api";
import { toast, ToastContainer } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductDetailsQuery(id);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, [data]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
  };

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
     toast.success("Product added successfully");
  }

  return (
    <section className="bg-slate-50 py-16">
      <ToastContainer/>
      <div className="container">
        <div className="rounded-[28px] bg-white p-4 shadow-sm md:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="col-span-1">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                {data?.images?.length > 0 && (
                  <Slider
                    {...settings}
                    asNavFor={nav2}
                    ref={sliderRef1}
                    className="w-full"
                  >
                    {data.images.map((img) => (
                      <div key={img}>
                        <img
                          src={img}
                          alt={data.title}
                          className="mx-auto h-[320px] w-full object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                )}
              </div>

              <div className="mt-4">
                {data?.images?.length > 0 && (
                  <Slider
                    {...settings}
                    asNavFor={nav1}
                    ref={sliderRef2}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {data.images.map((img) => (
                      <div key={img}>
                        <div className="mx-2 flex cursor-pointer items-center justify-center rounded-2xl border border-slate-200 bg-white p-2">
                          <img
                            src={img}
                            alt={data.title}
                            className="h-20 w-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>

            <div className="col-span-2">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                      {data?.availabilityStatus || "Available"}
                    </span>
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                      Brand: {data?.brand}
                    </span>
                    <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                      Category: {data?.category}
                    </span>
                  </div>

                  <Link
                    to=""
                    className="inline-flex items-center gap-2 font-bold text-blue-500 transition hover:text-blue-700"
                  >
                    <MdCompareArrows className="text-xl" />
                    <p className="text-lg">Add to Compare</p>
                  </Link>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                  {data?.title}
                </h2>

                <p className="text-lg leading-8 text-slate-600">
                  {data?.description}
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Cash Price</p>
                    <p className="mt-1 text-2xl font-bold text-emerald-600">
                      ${data?.price}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Stock</p>
                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      {data?.stock}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Discount</p>
                    <p className="mt-1 text-2xl font-bold text-rose-500">
                      {data?.discountPercentage || 0}%
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="mb-4 text-2xl font-bold text-slate-900">
                    Product Details
                  </p>

                  <div className="grid gap-3 text-base text-slate-700 md:grid-cols-2">
                    <p>
                      Category:{" "}
                      <span className="font-semibold text-primary">
                        {data?.category}
                      </span>
                    </p>
                    <p>
                      Brand:{" "}
                      <span className="font-semibold text-primary">
                        {data?.brand}
                      </span>
                    </p>
                    <p>
                      Stock:{" "}
                      <span className="font-semibold text-primary">
                        {data?.stock}
                      </span>
                    </p>
                    <p>
                      Weight:{" "}
                      <span className="font-semibold text-primary">
                        {data?.weight}
                      </span>
                    </p>
                    <p>
                      Warranty:{" "}
                      <span className="font-semibold text-primary">
                        {data?.warrantyInformation}
                      </span>
                    </p>
                    <p>
                      Shipping:{" "}
                      <span className="font-semibold text-primary">
                        3-5 Days
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-lg font-semibold text-slate-900">
                    Select Quantity:
                  </p>

                  <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1 w-fit">
                    <button
                      onClick={decreaseQty}
                      className="rounded-xl p-3 text-slate-700 transition hover:bg-white"
                    >
                      <FiMinus />
                    </button>

                    <span className="min-w-[60px] text-center text-lg font-semibold text-slate-900">
                      {quantity}
                    </span>

                    <button
                      onClick={increaseQty}
                      className="rounded-xl p-3 text-slate-700 transition hover:bg-white"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button
                    size="md"
                    className="cursor-pointer bg-green-600 hover:bg-green-700"
                  >
                    Buy Now
                  </Button>

                  <Link
                  className="bg-amber-500 text-white text-center hover:bg-amber-700 cursor-pointer rounded-xl text-xl p-3"
                   to=""
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
                  <Link
                    to=""
                    className="flex items-center gap-3 rounded-2xl bg-amber-100 p-4"
                  >
                    <RiDiscountPercentLine className="text-2xl" />
                    <p className="text-lg">
                      EMI Available <span className="font-bold">View Plans</span>
                    </p>
                  </Link>

                  <Link
                    to="https://wa.me/8801816795593"
                    className="flex items-center gap-3 rounded-2xl bg-green-100 p-4"
                  >
                    <BsWhatsapp className="text-2xl font-bold text-green-900" />
                    <p className="text-lg font-semibold">Whatsapp</p>
                  </Link>
                </div>

                <p className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-base text-slate-700">
                  <TbTruckDelivery className="text-2xl" />
                  Delivery Timescale:
                  <span className="font-semibold">3-5 Days</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex flex-wrap gap-4">
              <Button size="md" variant="orange" className="cursor-pointer">
                Specification
              </Button>
              <Button size="md" variant="orange" className="cursor-pointer">
                Description
              </Button>
              <Button size="md" variant="orange" className="cursor-pointer">
                Warranty
              </Button>
            </div>

            <h3 className="text-2xl font-semibold text-slate-900">
              Description
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;