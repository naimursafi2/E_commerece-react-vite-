import React from "react";
import ProductCard from "../ui/ProductCard";
import Categories from "../home/Categories";

const ProductList = () => {
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
  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-6 flex justify-between">
          <p>
            Showing: <span className="font-bold">(66 Items)</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-lg">Displaying 1-10 of 41 Products</p>
            <select className="border rounded-2xl py-2 px-2">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
          </div>
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

export default ProductList;
