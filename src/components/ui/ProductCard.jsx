import React from "react";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router";

const ProductCard = ({ data }) => {
  return (
    <div className="border border-primary/20 hover:shadow-sm transition relative rounded-2xl overflow-hidden w-full">
      <Link
        to={`/shop/${data?.id}`}
        className="bg-secondary py-4 flex justify-center h-40"
      >
        <img
          src={data?.thumbnail}
          alt={data?.title}
          className="w-auto max-w-full "
        />
      </Link>
      <div className="bg-theme p-3 ">
        <h3 className="text-xs md:text-lg pb-2">{data?.title}</h3>
        <div className="flex gap-2 pb-2.5 mb-1 md:mb-2.5 border-b border-secondary">
          <p className="font-bold text-sm md:text-base">${data?.price}</p>
          <p className="line-through font-normal text-sm md:text-base">
            ${data?.price + 50}
          </p>
        </div>
        <p className="text-amber-500  font-semibold text-sm md:text-base flex items-center gap-3">
          Rating:
          <span className="flex items-center ">
            <BiStar />
            {data?.rating}
          </span>
        </p>
      </div>
      {data?.discountPercentage && (
        <div className="p-2 md:p-2.5 bg-brand rounded-bl-2xl absolute top-0 right-0 max-w-8 md:max-w-14">
          <p className="text-sm font-bold text-theme">{data?.discountPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
