import React, { useMemo, useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiArrowLeft,
  FiTag,
  FiTruck,
  FiShield,
} from "react-icons/fi";
import { Link } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      color: "Black",
      size: "M",
      price: 850,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Classic Sneakers",
      color: "White",
      size: "42",
      price: 2450,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Leather Backpack",
      color: "Brown",
      size: "Large",
      price: 3200,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const shippingCost = 80;
  const discount = coupon.toLowerCase() === "save10" ? 150 : 0;

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        if (type === "inc") return { ...item, qty: item.qty + 1 };
        if (type === "dec")
          return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cartItems]);

  const total = subtotal + shippingCost - discount;

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
                  className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
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
                          <p className="mt-1 text-sm text-slate-500">
                            Color: {item.color} • Size: {item.size}
                          </p>
                          <p className="mt-3 text-xl font-bold text-emerald-600">
                            ৳{item.price}
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

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
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

                        <p className="text-base font-semibold text-slate-800">
                          Total: ৳{item.price * item.qty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-500">
                  <FiShoppingBag />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-slate-500">
                  Add some products to see them here.
                </p>
              </div>
            )}
          </div>

          <div className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-2xl font-bold text-slate-900">Order Summary</h3>

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
                <span>৳{subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Shipping</span>
                <span>৳{shippingCost}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Discount</span>
                <span>- ৳{discount}</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="text-lg font-semibold text-slate-900">
                Grand Total
              </span>
              <span className="text-2xl font-bold text-emerald-600">
                ৳{total}
              </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
