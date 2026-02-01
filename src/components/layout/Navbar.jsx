import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import {
  FaBars,
  FaCarSide,
  FaChevronDown,
  FaChevronRight,
  FaRegUser,
} from "react-icons/fa";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const categories = [
    {
      title: "Mobile",
      to: "",
      children: [
        {
          title: "i-phone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Laptop",
      to: "",
      children: [
        {
          title: "i-phone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "TWS",
      to: "",
      children: [
        {
          title: "i-phone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Punjabi",
      to: "",
      children: [
        {
          title: "i-phone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Shari",
      to: "",
      children: [
        {
          title: "i-phone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
  ];
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [navRef]);
  console.log(openDropDown);
  return (
    <header>
      <div className="hidden md:block py-3 bg-secondary">
        <div className="text-primary text-base container flex justify-between items-center">
          <h3>Welcome to worldwide Megamart!</h3>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 relative after:absolute after:top-0 after:h-full after:w-0.5 after:bg-primary/40 after:-right-4"
            >
              <FaLocationDot className=" text-brand text-xl" />
              Deliver to 423651
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 relative after:absolute after:top-0 after:h-full after:w-0.5 after:bg-primary/40 after:-right-4"
            >
              <FaCarSide className=" text-brand text-xl" />
              Track your order
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <CiDiscount1 className=" text-brand text-xl" />
              All Offers
            </Link>
          </div>
        </div>
      </div>
      <nav className="py-5">
        <div className="container">
          <div className=" flex justify-between items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-primary text-2xl md:hidden"
            >
              <FaBars />
            </button>
            <Link to="/" className="inline-block w-28 md:w-auto">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>
            {/* Dekstop Searchbar */}
            <div className="hidden md:flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg">
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
                className="hidden md:flex items-center gap-1.5 font-bold text-base text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
              >
                <FaRegUser className="text-brand text-xl" />
                Sign Up/Sign In
              </Link>
              <Link
                to="/signin"
                className="flex items-center gap-1.5 font-bold text-lg text-primary"
              >
                <FaCartShopping className="text-brand text-2xl" />
                <span className="hidden md:block">Cart</span>
              </Link>
            </div>
          </div>
          {/* Mobile Searchbar */}
          <div className="flex md:hidden gap-2.5 mt-10 items-center p-3 bg-[#F3F9FB] rounded-xl w-full max-w-lg">
            <GoSearch className="text-brand text-2xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="text-base text-primary w-full outline-0"
            />
          </div>
        </div>
      </nav>
      {/*Dekstop product categories */}
      <div className="border-y border-secondary py-3 hidden md:block">
        <div className="flex container gap-5 ">
          {categories.map((item) => (
            <div key={item.title} className="relative group">
              <Link className="bg-third inline-block hover:bg-brand py-2 px-3 text-[#22222] hover:text-theme rounded-2xl text-base font-medium">
                <div className="flex items-center gap-1">
                  <p className="text-xl">{item.title}</p>
                  <BiChevronDown />
                </div>
              </Link>
              <ul className="absolute top-full left-0 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-theme shadow-2xl w-48 p-3 space-y-2 text-base text-primary text-medium">
                {item.children.map((child) => (
                  <li key={child.title}>
                    <Link
                      to={child.to}
                      className="p-2 hover:bg-brand rounded-2xl block hover:text-theme"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition md:hidden fixed top-0 left-0 w-full h-screen bg-primary/80`}
      >
        <div
          ref={navRef}
          className={`${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all w-4/5 bg-theme/83 h-full `}
        >
          <div className="bg-black/90 px-2 flex justify-between items-center py-3 border-b border-primary/70">
            <h5 className="font-bold text-xl text-white">Menu Sidebar</h5>
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl font-semibold text-white bg-black rounded-full"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <ul className="p-4 space-y-4 text-primary font-bold text-lg mb-5 pb-5 border-b border-theme">
            {categories.map((item) => (
              <li key={item.title}>
                <div className="flex justify-between items-center">
                  <Link>{item.title}</Link>
                  <button onClick={() => setOpenDropDown(item.title)}>
                    <FaChevronRight className="" />
                  </button>
                </div>
                <ul
                  className={`${openDropDown === item.title ? "block" : "hidden"}  font-semibold text-base pl-3 space-y-2 mt-2`}
                >
                  {item.children.map((child) => (
                    <li key={child.title}>
                      <Link>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Link
            to="/signin"
            className="flex px-4 items-center gap-1.5 font-bold text-base uppercase relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
          >
            Sign Up/Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
