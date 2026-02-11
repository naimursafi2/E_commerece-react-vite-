import React, { useState } from "react";
import ProductCard from "../ui/ProductCard";
import { useGetProductsQuery } from "../../services/Api";
import Loading from "../ui/Loading";

const ProductList = () => {
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const { data, isSuccess, isError, error, isLoading } = useGetProductsQuery({
    limit,
    skip,
  });
  console.log(data);

  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-6 flex justify-between"> 
          <p>
            Showing: <span className="font-bold">({data?.total} Items)</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-lg">Displaying 1-10 of 41 Products</p>
            <select
              onChange={(e) => setLimit(e.target.value)}
              value={limit}
              className="border rounded-2xl py-2 px-2"
            >
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4">
            {data?.products.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
