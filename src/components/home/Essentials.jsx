import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import { useGetProductsQuery } from "../../services/Api";

const Essentials = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery({
    limit: 7,
    category: "kitchen-accessories",
  });
  const categorie = [
    {
      image: "fruit4.png",
      name: "Daily Essentials",
      title: "UP to 50% OFF",
    },
    {
      image: "/fruit1.png",
      name: "Mango",
      title: "UP to 40% OFF",
    },
    {
      image: "fruit2.png",
      name: "Cherry",
      title: "UP to 20% OFF",
    },
    {
      image: "fruit3.png",
      name: "Strowberry",
      title: "UP to 70% OFF",
    },
    {
      image: "fruit5.png",
      name: "Vegitables",
      title: "UP to 50% OFF",
    },
    {
      image: "fruit6.png",
      name: "Fruits",
      title: "UP to 50% OFF",
    },
  ];
  return (
    <section className="pb-28">
      <div className="container">
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading">
            Essential<span> kitchen-accessories</span>
          </h2>
          <Link
            to={`/shop?category=kitchen-accessories`}
            className="flex items-center "
          >
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
                <p className="text-base font-bold text-nowrap text-black ">
                  {item.title}
                </p>
                <p className="text-base text-primary font-semibold">$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
