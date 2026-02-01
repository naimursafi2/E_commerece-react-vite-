import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import EssentialCard from "../ui/EssentialCard";

const Essentials = () => {
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
            Daily <span>Essentials</span>
          </h2>
          <Link to="/" className="flex items-center ">
            View all
            <BiChevronRight className="text-2xl text-brand" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  lg:gap-4">
          {categorie.map((items, index) => (
            <EssentialCard
              key={index}
              image={items.image}
              name={items.name}
              title={items.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
