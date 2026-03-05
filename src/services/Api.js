import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../components/utils/utili";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit = 20, skip = 0, category }) =>
        `/products${category ? "/category/" + category : ""}?limit=${limit}&skip=${skip} `,
    }),
    getProductDetails: build.query({
      query: (id) => `/products/${id}`,
    }),
    getCategoryList: build.query({
      query: () => `/products/category-list`,
    }),
    login: build.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
        // credentials:"included",
      }),
    }),
    getProfile: build.query({
      query: () => ({
        url: `/auth/me`,
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`, // Pass JWT via Authorization header
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetCategoryListQuery,
  useLoginMutation,
  useGetProfileQuery,
} = API;
