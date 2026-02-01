import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import ProductCard from "../ui/ProductCard";

const products = [
  {
    image: "/mobile1.png",
    title: "Galaxy S22 Ultra",
    price: "₹32999",
    oldprice: "₹74999",
    save: "₹32999",
    discount: "50%",
  },
  {
    image: "/mobile2.png",
    title: "Galaxy M13",
    price: "₹10499",
    oldprice: "₹14999",
    save: "₹4500",
    discount: "60%",
  },
  {
    image: "/mobile3.png",
    title: "Galaxy M33",
    price: "₹16999",
    oldprice: "₹24999",
    save: "₹8000",
    discount: "40%",
  },
  {
    image: "/mobile4.png",
    title: "Galaxy S22 Ultra",
    price: "₹31999",
    oldprice: "₹40999",
    save: "₹9000",
    discount: "30%",
  },
  {
    image: "/mobile5.png",
    title: "Galaxy S22 Ultra",
    price: "₹67999",
    oldprice: "₹85999",
    save: "₹18000",
    discount: "70%",
  },
  {
    image: "/mobile1.png",
    title: "Galaxy S22 Ultra",
    price: "₹32999",
    oldprice: "₹74999",
    save: "₹329",
    discount: "8%",
  },
];

const BestDeals = () => {
  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading">
            Grab the best deal on <span>Smartphones</span>
          </h2>
          <Link to="/" className="flex items-center ">
            View all
            <BiChevronRight className="text-2xl text-brand" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              oldprice={item.oldprice}
              save={item.save}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
