import React from "react";
import { Link } from "react-router";

const ProductCard = () => {
  return (
    <div className="border border-primary/20 hover:shadow-sm transition relative rounded-2xl overflow-hidden w-full">
      <Link to="/" className="bg-secondary py-4 flex justify-center">
        <img src="/mobile1.png" alt="Mobile" className="w-auto max-w-full" />
      </Link>
      <div className="bg-theme p-3">
        <h3 className="text-xs md:text-xl pb-2">Galaxy S22 Ultra</h3>
        <div className="flex gap-2 pb-2.5 mb-1 md:mb-2.5 border-b border-secondary">
          <p className="font-bold text-sm md:text-base">₹32999</p>
          <p className="line-through font-normal text-sm md:text-base">₹74999</p>
        </div>
        <p className="text-green-600 font-semibold text-sm md:text-base">Save - ₹32999</p>
      </div>
      <div className="p-2 md:p-2.5 bg-brand rounded-bl-2xl absolute top-0 right-0 max-w-8 md:max-w-12">
        <p className="text-sm font-bold text-theme">56% off</p>
      </div>
    </div>
  );
};

export default ProductCard;
