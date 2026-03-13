import { useEffect, useRef, useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaBars, FaCarSide, FaRegUser } from "react-icons/fa";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router";
import { useGetCategoryListQuery } from "../../services/Api";

const Navbar = () => {
  // mobile sidebar open/close state
  const [isOpen, setIsOpen] = useState(false);

  // logged-in user info store করার জন্য
  const [userInfo, setUserInfo] = useState(null);

  // sidebar এর বাইরে click detect করার জন্য ref
  const navRef = useRef(null);

  // category API data
  const { data } = useGetCategoryListQuery();

  // cookie থেকে value বের করার function
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  };

  // component load হলে cookie থেকে user info বের করে
  useEffect(() => {
    const token = getCookie("accessToken");
    const user = getCookie("user");

    if (token && user) {
      setUserInfo(JSON.parse(decodeURIComponent(user)));
    } else {
      setUserInfo(null);
    }
  }, []);

  // mobile sidebar এর বাইরে click করলে sidebar close হবে
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {/* ================= TOP HEADER (Desktop only) ================= */}
      <div className="hidden bg-secondary py-3 md:block">
        <div className="container flex items-center justify-between text-base text-primary">
          <h3>Welcome to worldwide Megamart!</h3>

          <div className="flex items-center gap-8">
            {/* delivery location */}
            <Link
              to="/"
              className="relative flex items-center gap-2 after:absolute after:-right-4 after:top-0 after:h-full after:w-0.5 after:bg-primary/40"
            >
              <FaLocationDot className="text-brand text-xl" />
              Deliver to 423651
            </Link>

            {/* track order */}
            <Link
              to="/"
              className="relative flex items-center gap-2 after:absolute after:-right-4 after:top-0 after:h-full after:w-0.5 after:bg-primary/40"
            >
              <FaCarSide className="text-brand text-xl" />
              Track your order
            </Link>

            {/* offers */}
            <Link to="/" className="flex items-center gap-2">
              <CiDiscount1 className="text-brand text-xl" />
              All Offers
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-primary md:hidden"
            >
              <FaBars />
            </button>

            {/* logo */}
            <Link to="/" className="inline-block w-28 md:w-auto">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>

            {/* desktop search bar */}
            <div className="hidden w-full max-w-lg items-center gap-2.5 rounded-xl bg-[#F3F9FB] p-4 md:flex">
              <GoSearch className="text-2xl text-brand" />
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="w-full text-base text-primary outline-0"
              />
            </div>

            {/* right side: profile/login + cart */}
            <div className="flex gap-10">
              {/* desktop profile / login button */}
              <Link
                to={userInfo ? "/profile" : "/login"}
                className="relative hidden items-center gap-2 font-bold text-base text-primary hover:text-black after:absolute after:-right-5 after:top-0 after:h-full after:w-0.5 after:bg-primary/40 md:flex"
              >
                {userInfo ? (
                  <>
                    <img
                      src={userInfo.image}
                      alt="profile"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <span>Profile</span>
                  </>
                ) : (
                  <>
                    <FaRegUser className="text-brand text-xl" />
                    <span>Sign Up/Sign In</span>
                  </>
                )}
              </Link>

              {/* cart button */}
              <Link
                to="/cart"
                className="flex items-center gap-1.5 text-lg font-bold text-primary hover:text-black"
              >
                <FaCartShopping className="text-brand text-2xl" />
                <span className="hidden md:block">Cart</span>
              </Link>
            </div>
          </div>

          {/* mobile search bar */}
          <div className="mt-6 flex w-full items-center gap-2.5 rounded-xl bg-[#F3F9FB] p-3 md:hidden">
            <GoSearch className="text-2xl text-brand" />
            <input
              type="text"
              placeholder="Search essentials..."
              className="w-full text-base text-primary outline-0"
            />
          </div>
        </div>
      </nav>

      {/* ================= DESKTOP CATEGORY BAR ================= */}
      <div className="hidden border-y border-secondary py-3 md:block">
        <div className="container flex gap-5">
          {data?.slice(0, 10)?.map((item) => (
            <Link
              key={item}
              to={`/shop?category=${item}`}
              className="inline-block rounded-2xl bg-third px-3 py-2 text-sm capitalize hover:bg-brand hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR OVERLAY ================= */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-full bg-black/60 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* ================= MOBILE SIDEBAR CONTENT ================= */}
        <div
          ref={navRef}
          className={`h-full w-4/5 bg-white p-5 transition-all ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* sidebar close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mb-6 text-xl font-bold"
          >
            Close
          </button>

          {/* mobile category list */}
          <ul className="space-y-4">
            {data?.slice(0, 10)?.map((item) => (
              <li key={item}>
                <Link
                  to={`/shop?category=${item}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile profile / login button */}
          <div className="mt-10">
            <Link
              to={userInfo ? "/profile" : "/login"}
              onClick={() => setIsOpen(false)}
            >
              {userInfo ? (
                <div className="flex items-center gap-2">
                  <img
                    src={userInfo.image}
                    className="h-8 w-8 rounded-full object-cover"
                    alt="profile"
                  />
                  <span>Profile</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FaRegUser className="text-brand text-xl" />
                  <span>Sign Up / Sign In</span>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;