import React, { useState } from "react";
import ProductCard from "../ui/ProductCard";
import { useGetProductsQuery } from "../../services/Api";
import Loading from "../ui/Loading";
import { useSearchParams } from "react-router";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

  const { data, isLoading } = useGetProductsQuery({
    limit,
    skip,
    category,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto flex gap-6">
        <Sidebar />

        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p>
              Showing: <span className="font-bold">({limit} Items)</span>
            </p>
            <div className="flex items-center gap-4">
              <p className="text-lg">
                Displaying {skip + 1}-{Number(limit)} Products
              </p>
              <select
                onChange={(e) => setLimit(Number(e.target.value))}
                value={limit}
                className="rounded-2xl border px-2 py-2"
              >
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {data?.products?.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
