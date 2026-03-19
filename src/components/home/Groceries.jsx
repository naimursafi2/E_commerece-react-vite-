import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import { useGetProductsQuery } from "../../services/Api";

const Groceries = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery({
    limit: 7,
    category: "groceries",
  });

  return (
    <section className="pb-28">
      <div className="container">
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading">
            Daily <span>Groceries</span>
          </h2>
          <Link to={`/shop?category=groceries`} className="flex items-center text-nowrap text-md md:text-xl">
            View all
            <BiChevronRight className="text-2xl text-brand" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1.5 lg:gap-4">
          {data?.products?.map((item) => (
            <div key={item.id}>
              <div className="border border-transparent hover:shadow-xl transition hover:border-brand/80 bg-secondary rounded-xl w-full">
                <Link
                  to={`/shop/${item.id}`}
                  className="flex justify-center py-3.5 h-36 px-10"
                >
                  <img
                    src={item.thumbnail}
                    alt="mobile"
                    className="w-auto max-w-full"
                  />
                </Link>
              </div>
              <div className="text-center mt-5 ">
                <p className="text-base font-bold text-black ">
                  {item.title}
                </p>
                <p className="text-base font-semibold text-primary">$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Groceries;
