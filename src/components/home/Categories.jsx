import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";

const Categories = () => {
  const categorie = [
    {
      image: "/mobile1.png",
      title: "Mobile",
    },
    {
      image: "face-wash.png",
      title: "Cosmetics",
    },
    {
      image: "categori3.png",
      title: "Electronics",
    },
    {
      image: "categori4.png",
      title: "Furniture",
    },
    {
      image: "categori5.png",
      title: "Watches",
    },
    {
      image: "categori6.png",
      title: "Decor",
    },
    {
      image: "categori7.png",
      title: "Accessories",
    },
  ];
  return (
    <section className="pb-28">
      <div className="container">
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading">
            Shop From<span>Top Categories</span>
          </h2>
          <Link to="/" className="flex items-center ">
            View all
            <BiChevronRight className="text-2xl text-brand" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1.5 lg:gap-4">
          {categorie.map((items) => (
            <div key={items.title}>
              <div className="flex justify-center items-center gap-2 border border-transparent hover:shadow-xl transition h-38 hover:border-brand/40 bg-secondary rounded-full w-full">
                <Link to="/" className="flex justify-center py-3.5 px-10 ">
                  <img
                    src={items.image}
                    alt="mobile"
                    className="w-auto max-w-4/5 h-auto max-h-4/5"
                  />
                </Link>
              </div>
              <div className="text-center mt-5 ">
                <p className="text-base font-medium ">{items.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
