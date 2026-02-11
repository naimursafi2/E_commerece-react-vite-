import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import ProductCard from "../ui/ProductCard";
import { useGetProductsQuery } from "../../services/Api";


 

const BestDeals = () => {
    const { data, isSuccess, isError, error, isLoading } = useGetProductsQuery();
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
          {data?.products.map((item) => (
            <ProductCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
