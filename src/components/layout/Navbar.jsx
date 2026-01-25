import React, { Children } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router";

const Navbar = () => {
  const categories = [
    {
      title: "Mobile",
      to: "",
      children: ["I-phone, Samsung, Nokia"],
    },
    {
      title: "Laptop",
      to: "",
      children: ["I-phone, Samsung, Nokia"],
    },
    {
      title: "TWS",
      to: "",
      children: ["I-phone, Samsung, Nokia"],
    },
    {
      title: "Punjabi",
      to: "",
      children: ["I-phone, Samsung, Nokia"],
    },
    {
      title: "Shari",
      to: "",
      children: ["I-phone, Samsung, Nokia"],
    },
  ];
  return (
    <header>
      <nav className="py-5">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg">
            <GoSearch className="text-brand text-2xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="text-base text-primary w-full outline-0"
            />
          </div>
          <div className="flex gap-10">
            <Link
              to="/signin"
              className="flex items-center gap-1.5 font-bold text-base text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
            >
              <FaRegUser className="text-brand text-xl" />
              Sign Up/Sign In
            </Link>
            <Link
              to="/signin"
              className="flex items-center gap-1.5 font-bold text-lg text-primary"
            >
              <FaCartShopping className="text-brand text-2xl" />
              Cart
            </Link>
          </div>
        </div>
      </nav>
      {/* product categories */}
      <div>
        <div className="flex container gap-5 ">
          {categories.map((item) => (
            <div key={item.title} className="relative group">
              <Link className="bg-third inline-block hover:bg-brand py-2 px-3 text-[#22222] hover:text-theme rounded-2xl text-base font-medium">
                <div className="flex items-center gap-1">
                  <p className="text-xl">{item.title}</p>
                  <BiChevronDown />
                </div>
              </Link>
              <ul className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-theme shadow-2xl w-48 p-3 space-y-2 text-base text-primary text-medium">
                {item.children.map((child) => (
                  <li key={child}>
                    <Link className="p-2 hover:bg-brand rounded-2xl block hover:text-theme">
                      {child}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
