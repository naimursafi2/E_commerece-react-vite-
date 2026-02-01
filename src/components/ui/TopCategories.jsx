import React from "react";
import { Link } from "react-router";

const TopCategories = ({image, title}) => {
  return (
    <div>
        <div className="hover:border shadow hover:border-brand/40 bg-secondary rounded-full w-full">
      <Link to="/" className="flex justify-center py-3.5 px-10 h-38">
        <img src={image} alt="mobile" className="w-auto max-w-full"/>
      </Link>
    </div>
      <div className="text-center mt-5 ">
        <p className="text-base font-medium ">{title}</p>
      </div>
    </div>
  );
};

export default TopCategories;
