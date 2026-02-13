import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit = 20, skip = 0 }) =>
        `/products?limit=${limit}&skip=${skip} `,
    }),
    getProductDetails:build.query({
      query: (id) =>
        `/products/${id}`,
    }),   
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = API;
