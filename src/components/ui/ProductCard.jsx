import React from "react";
import { Link } from "react-router";

const ProductCard = ({ image, title, price, oldprice, save, discount }) => {
  return (
    <div className="border border-primary/20 hover:shadow-sm transition relative rounded-2xl overflow-hidden w-full">
      <Link
        to="/shop/productslug"
        className="bg-secondary py-4 flex justify-center h-40"
      >
        <img src={image} alt={title} className="w-auto max-w-full " />
      </Link>
      <div className="bg-theme p-3 ">
        <h3 className="text-xs md:text-lg pb-2">{title}</h3>
        <div className="flex gap-2 pb-2.5 mb-1 md:mb-2.5 border-b border-secondary">
          <p className="font-bold text-sm md:text-base">{price}</p>
          <p className="line-through font-normal text-sm md:text-base">
            {oldprice}
          </p>
        </div>
        <p className="text-green-600 font-semibold text-sm md:text-base">
          {save}
        </p>
      </div>
      <div className="p-2 md:p-2.5 bg-brand rounded-bl-2xl absolute top-0 right-0">
        <p className="text-sm font-bold text-theme">{discount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
