import React, { useEffect, useMemo, useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiArrowLeft,
  FiTag,
  FiTruck,
  FiShield,
  FiGift,
  FiCreditCard,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router";
import { useGetCartQuery } from "../services/Api";
;

const Cart = () => {
  const { data, isLoading, isError } = useGetCartQuery();

  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    if (data?.carts?.length > 0) {
      const firstCart = data.carts[0];

      const formattedProducts = firstCart.products.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        qty: item.quantity,
        image: item.thumbnail,
        total: item.total,
        discountPercentage: item.discountPercentage,
        discountedTotal: item.discountedTotal,
      }));

      setCartItems(formattedProducts);
    }
  }, [data]);

  const shippingCost = cartItems.length > 0 ? 80 : 0;
  const platformFee = cartItems.length > 0 ? 20 : 0;
  const couponDiscount = coupon.toLowerCase() === "save10" ? 150 : 0;

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (type === "inc") {
          const newQty = item.qty + 1;
          const newTotal = item.price * newQty;
          const newDiscountedTotal =
            newTotal - (newTotal * item.discountPercentage) / 100;

          return {
            ...item,
            qty: newQty,
            total: newTotal,
            discountedTotal: newDiscountedTotal,
          };
        }

        if (type === "dec") {
          const newQty = item.qty > 1 ? item.qty - 1 : 1;
          const newTotal = item.price * newQty;
          const newDiscountedTotal =
            newTotal - (newTotal * item.discountPercentage) / 100;

          return {
            ...item,
            qty: newQty,
            total: newTotal,
            discountedTotal: newDiscountedTotal,
          };
        }

        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.total, 0);
  }, [cartItems]);

  const productDiscount = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + (item.total - item.discountedTotal),
      0,
    );
  }, [cartItems]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.qty, 0);
  }, [cartItems]);

  const total = subtotal + shippingCost + platformFee - productDiscount - couponDiscount;
  const totalSaved = productDiscount + couponDiscount;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-semibold text-slate-700">Loading cart...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-semibold text-red-500">
              Failed to load cart data.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900 md:text-4xl">
              <FiShoppingBag className="text-emerald-600" />
              Shopping Cart
            </h1>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Review your selected products before checkout.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <FiArrowLeft />
            Continue Shopping
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-5">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md md:p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full rounded-2xl object-cover md:w-32"
                    />

                    <div className="flex-1">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-slate-900">
                            {item.name}
                          </h2>

                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                              Product ID: #{item.id}
                            </span>
                            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                              {item.discountPercentage}% OFF
                            </span>
                          </div>

                          <p className="mt-3 text-xl font-bold text-emerald-600">
                            ৳{item.price.toFixed(2)}
                            <span className="ml-2 text-sm font-normal text-slate-400">
                              / unit
                            </span>
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="inline-flex items-center gap-2 self-start rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100"
                        >
                          <FiTrash2 />
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1">
                          <button
                            onClick={() => updateQty(item.id, "dec")}
                            className="rounded-xl p-2 text-slate-700 transition hover:bg-white"
                          >
                            <FiMinus />
                          </button>

                          <span className="min-w-[44px] text-center text-sm font-semibold text-slate-800">
                            {item.qty}
                          </span>

                          <button
                            onClick={() => updateQty(item.id, "inc")}
                            className="rounded-xl p-2 text-slate-700 transition hover:bg-white"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
                          <p className="text-sm text-slate-500">
                            Total:{" "}
                            <span className="font-medium text-slate-700">
                              ৳{item.total.toFixed(2)}
                            </span>
                          </p>
                          <p className="text-sm text-slate-500">
                            Saved:{" "}
                            <span className="font-medium text-emerald-600">
                              ৳{(item.total - item.discountedTotal).toFixed(2)}
                            </span>
                          </p>
                          <p className="mt-1 text-base font-bold text-slate-900">
                            Final: ৳{item.discountedTotal.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                        <p className="flex items-center gap-2">
                          <FiCheckCircle className="text-emerald-600" />
                          In stock
                        </p>
                        <p className="flex items-center gap-2">
                          <FiTruck className="text-emerald-600" />
                          Delivery in 2-4 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-600">
                  <FiShoppingBag />
                </div>

                <h2 className="text-2xl font-semibold text-slate-900">
                  Your cart is empty
                </h2>

                <p className="mt-2 text-slate-500">
                  Looks like you haven’t added any products yet.
                </p>

                <div className="mt-6">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
                  >
                    <FiArrowLeft />
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-2xl font-bold text-slate-900">Order Summary</h3>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Total Items</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  {cartItems.length}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Total Quantity</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  {totalQuantity}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-3">
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <FiTag className="text-emerald-600" />
                Coupon Code
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                />
                <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  Apply
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500">Use code: SAVE10</p>
            </div>

            <div className="mt-6 space-y-4 border-b border-slate-200 pb-5 text-sm">
              <div className="flex items-center justify-between text-slate-600">
                <span>Subtotal</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>Shipping</span>
                <span>৳{shippingCost.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>Platform Fee</span>
                <span>৳{platformFee.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>Product Discount</span>
                <span>- ৳{productDiscount.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>Coupon Discount</span>
                <span>- ৳{couponDiscount.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="text-lg font-semibold text-slate-900">
                Grand Total
              </span>
              <span className="text-2xl font-bold text-emerald-600">
                ৳{total.toFixed(2)}
              </span>
            </div>

            <div className="mb-5 rounded-2xl bg-emerald-50 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                <FiGift />
                You saved ৳{totalSaved.toFixed(2)} on this order
              </p>
            </div>

            <button className="w-full rounded-2xl bg-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:shadow-xl">
              Proceed to Checkout
            </button>

            <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <FiTruck className="text-emerald-600" />
                Fast delivery all over Bangladesh
              </div>
              <div className="flex items-center gap-3">
                <FiShield className="text-emerald-600" />
                100% secure payment system
              </div>
              <div className="flex items-center gap-3">
                <FiCreditCard className="text-emerald-600" />
                Cash on delivery & online payment available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;